const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const API_URL = 'https://dummy.restapiexample.com/api/v1';

// Get all employees
app.get('/api/employees', async (req, res) => {
    try {
        const response = await axios.get(`${API_URL}/employees`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Get employee by ID
app.get('/api/employees/:id', async (req, res) => {
    try {
        const response = await axios.get(`${API_URL}/employee/${req.params.id}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Create new employee
app.post('/api/employees', async (req, res) => {
    try {
        const response = await axios.post(`${API_URL}/create`, req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Update employee
app.put('/api/employees/:id', async (req, res) => {
    try {
        const response = await axios.put(`${API_URL}/update/${req.params.id}`, req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Delete employee
app.delete('/api/employees/:id', async (req, res) => {
    try {
        const response = await axios.delete(`${API_URL}/delete/${req.params.id}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
