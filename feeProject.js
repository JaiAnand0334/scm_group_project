// Sample data for initial contacts
   const contacts = [
    { name: "YUVRAJ", email: "yuvraj@example.com", phone: "123-456-7890", profilePic: "https://cdn.dribbble.com/users/269297/screenshots/2508750/media/30bfc4f28386cb56af18443e8431be03.gif" },
    { name: "JAI", email: "jai@example.com", phone: "987-654-3210", profilePic: "https://i.pinimg.com/originals/f1/25/3b/f1253bdeb1864d7fca7294ba6fc28886.gif" },
    { name: "KRISHDEEP", email: "krishdeep@example.com", phone: "965-654-0845", profilePic: "https://i.pinimg.com/originals/a9/0f/4a/a90f4aaee5395166fbe700409841f77c.gif" }
];

// Function to display contacts on the page
function displayContacts() {
    const container = document.getElementById('addressBookContainer');
    container.innerHTML = ''; // Clear existing content

    contacts.forEach(contact => {
        const contactDiv = document.createElement('div');
        contactDiv.className = 'contact';

        contactDiv.innerHTML = `
            <img src="${contact.profilePic}" alt="Profile Picture" onclick="changeProfilePic('${contact.name}')">
            <div class="contact-info">
                <h2 class="contact-name">${contact.name}</h2>
                <p class="contact-email">${contact.email}</p>
                <p class="contact-phone">${contact.phone}</p>
            </div>
            <div class="contact-actions">
                <button onclick="editContact('${contact.name}')">Edit</button>
                <button onclick="deleteContact('${contact.name}')">Delete</button>
            </div>
        `;

        container.appendChild(contactDiv);
    });

    // Add Contact button inside the container, after the last contact
    const addContactButton = document.createElement('button');
    addContactButton.className = 'add-contact-button';
    addContactButton.textContent = 'Add Contact';
    addContactButton.onclick = addContact;
    container.appendChild(addContactButton);
}

// Function to add a new contact
function addContact() {
    const name = prompt("Enter the name:");
    const email = prompt("Enter the email:");
    const phone = prompt("Enter the phone number:");
    const profilePic = prompt("Enter the profile picture URL:");

    if (name && email && phone && profilePic) {
        contacts.push({ name, email, phone, profilePic });
        displayContacts();
    }
}

// Function to change profile picture
function changeProfilePic(name) {
    const contact = contacts.find(c => c.name === name);

    if (contact) {
        const newProfilePic = prompt("Enter the new profile picture URL:", contact.profilePic);

        if (newProfilePic) {
            contact.profilePic = newProfilePic;
            displayContacts();
        }
    }
}

// Function to edit an existing contact
function editContact(name) {
    const contact = contacts.find(c => c.name === name);

    if (contact) {
        const newName = prompt("Enter the new name:", contact.name);
        const newEmail = prompt("Enter the new email:", contact.email);
        const newPhone = prompt("Enter the new phone number:", contact.phone);

        if (newName && newEmail && newPhone) {
            contact.name = newName;
            contact.email = newEmail;
            contact.phone = newPhone;
            displayContacts();
        }
    }
}

// Function to delete a contact
function deleteContact(name) {
    const index = contacts.findIndex(c => c.name === name);

    if (index !== -1) {
        contacts.splice(index, 1);
        displayContacts();
    }
}

// Initial display of contacts
displayContacts();