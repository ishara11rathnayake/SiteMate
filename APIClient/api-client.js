const axios = require('axios');

const BASE_URL = 'http://localhost:3000/api/v1'; // Replace with your server's base URL

// Create
function create(data) {
    axios.post(`${BASE_URL}/issues`, data)
        .then(response => {
            console.log('Create successful:', response.data);
        })
        .catch(error => {
            console.error('Create failed:', error.response.data);
        });
}

// Read
function read() {
    axios.get(`${BASE_URL}/issues`)
        .then(response => {
            console.log('Read successful:', response.data);
        })
        .catch(error => {
            console.error('Read failed:', error.response.data);
        });
}

// Update
function update(data, id) {
    axios.put(`${BASE_URL}/issues/${id}`, data)
        .then(response => {
            console.log('Update successful:', response.data);
        })
        .catch(error => {
            console.error('Update failed:', error.response.data);
        });
}

// Delete
function remove() {
    axios.delete(`${BASE_URL}/issues/${id}`)
        .then(response => {
            console.log('Delete successful:', response.data);
        })
        .catch(error => {
            console.error('Delete failed:', error.response.data);
        });
}

module.exports = { create, read, update, remove };
