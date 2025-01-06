const express = require('express');
const router = express.Router();
const pool = require('../db'); // Import the PostgreSQL pool from db/index.js

// Task CRUD API
router.get('/tasks', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM tasks ORDER BY "column", position');
        res.json(rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

router.post('/tasks', async (req, res) => {
    const { title, description, tag, column, position } = req.body;
    try {
        await pool.query(
            'INSERT INTO tasks (title, description, tag, "column", position) VALUES ($1, $2, $3, $4, $5)',
            [title, description, tag, column, position]
        );
        res.sendStatus(201);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

router.put('/tasks/:id', async (req, res) => {
    const { id } = req.params;
    const { title, description, tag, column, position } = req.body;
    try {
        await pool.query(
            'UPDATE tasks SET title=$1, description=$2, tag=$3, "column"=$4, position=$5 WHERE id=$6',
            [title, description, tag, column, position, id]
        );
        res.sendStatus(200);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

router.delete('/tasks/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM tasks WHERE id=$1', [id]);
        res.sendStatus(200);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Logs API
router.get('/logs', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM logs ORDER BY created_at DESC');
        res.json(rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

router.post('/logs', async (req, res) => {
    const { action } = req.body;
    try {
        await pool.query('INSERT INTO logs (action) VALUES ($1)', [action]);
        res.sendStatus(201);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
