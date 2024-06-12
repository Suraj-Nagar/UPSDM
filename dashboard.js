const trainers = [
    { id: '001', name: 'John Doe', email: 'john@example.com', contact: '1234567890' },
    { id: '002', name: 'Jane Smith', email: 'jane@example.com', contact: '0987654321' },
    { id: '001', name: 'John Doe', email: 'john@example.com', contact: '1234567890' },
    { id: '002', name: 'Jane Smith', email: 'jane@example.com', contact: '0987654321' }
    // Add more trainer data as needed
];

const centers = [
    { id: '101', name: 'Center A', location: 'City X', contact: '0987654321' },
    { id: '102', name: 'Center B', location:'City Y', contact: '1234567890' },
    { id: '101', name: 'Center A', location: 'City X', contact: '0987654321' },
    { id: '102', name: 'Center B', location: 'City Y', contact: '1234567890' }
    // Add more center data as needed
];

const attendance = [
    { id: '301', trainerId: '001', batchId: 'Batch A', date: '2024-06-10', status: 'Present' },
    { id: '302', trainerId: '002', batchId: 'Batch B', date: '2024-06-10', status: 'Absent' },
    { id: '301', trainerId: '001', batchId: 'Batch A', date: '2024-06-10', status: 'Present' },
    { id: '302', trainerId: '002', batchId: 'Batch B', date: '2024-06-10', status: 'Absent' }
    // Add more attendance data as needed
];

const batches = [
    { id: '401', name: 'Batch A', startDate: '2024-01-01', endDate: '2024-06-01' },
    { id: '402', name: 'Batch B', startDate: '2024-02-01', endDate: '2024-07-01' },
    { id: '401', name: 'Batch A', startDate: '2024-01-01', endDate: '2024-06-01' },
    { id: '402', name: 'Batch B', startDate: '2024-02-01', endDate: '2024-07-01' }
    // Add more batch data as needed
];

const users = [
    { id: '501', name: 'Jane Smith', email: 'jane@example.com', contact: '1122334455' },
    { id: '502', name: 'John Doe', email: 'john@example.com', contact: '5566778899' },
    { id: '501', name: 'Jane Smith', email: 'jane@example.com', contact: '1122334455' },
    { id: '502', name: 'John Doe', email: 'john@example.com', contact: '5566778899' }
    // Add more user data as needed
];

// Function to populate tables
function populateTable(dataArray, tableBodyId) {
    const tableBody = document.getElementById(tableBodyId);
    dataArray.forEach(data => {
        const row = document.createElement('tr');
        Object.keys(data).forEach(key => {
            const cell = document.createElement('td');
            cell.textContent = data[key];
            row.appendChild(cell);
        });
        const actionCell = document.createElement('td');
        const actionButton = document.createElement('button');
        actionButton.textContent = 'Send Request';
        actionButton.className = 'action-btn';
        actionCell.appendChild(actionButton);
        row.appendChild(actionCell);
        tableBody.appendChild(row);
    });
}

// Function to show the appropriate section
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.remove('active'));

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }
}

window.onload = function() {
    // Populate tables
    populateTable(trainers, 'trainer-body');
    populateTable(centers, 'center-body');
    populateTable(attendance, 'attendance-body');
    populateTable(batches, 'batch-management-body');
    populateTable(users, 'update-user-details-body');

    // Display logged-in user's email
    const loggedInEmail = localStorage.getItem('loggedInEmail');
    if (loggedInEmail) {
        const emailDisplayElement = document.getElementById('logged-in-email');
        emailDisplayElement.textContent = loggedInEmail;
    }
};
