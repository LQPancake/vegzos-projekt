require('dotenv').config();
const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

// Get all books
app.get('/books', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM books');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})

// Get a book by ID
app.get('/books/:id', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM books WHERE id = ?', [req.params.id]);
        if (rows.length === 0) {
            return res.status(404).json({ error: 'Book not found' });
        }
        res.json(rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Create a new book
app.post('/books', async (req, res) => {
    const { title, author, published_year, category, price } = req.body;
    if (!title || !author) {
        return res.status(400).json({ error: 'The title and author fields are required' });
    }
    try {
        const [result] = await pool.query('INSERT INTO books (title, author, published_year, category, price) VALUES (?, ?, ?, ?, ?)',
      [title, author, published_year || null, category || null, price || 0]);
      res.status(201).json({ id: result.insertId, title, author, published_year, category, price });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update a book
app.put('/books/:id', async (req, res) => {
  const { title, author, published_year, category, price } = req.body;
  if (!title || !author) {
    return res.status(400).json({ error: 'The title and author fields are required' });
  }
  try {
    const [result] = await pool.query(
      'UPDATE books SET title = ?, author = ?, published_year = ?, category = ?, price = ? WHERE id = ?',
      [title, author, published_year || null, category || null, price || 0, req.params.id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'The book was not found' });
    }
    res.json({ id: Number(req.params.id), title, author, published_year, category, price });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a book
app.delete('/books/:id', async (req, res) => {
  try {
    const [result] = await pool.query('DELETE FROM books WHERE id = ?', [req.params.id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'The book was not found' });
    }
    res.json({ message: 'The book has been deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`The server is running: http://localhost:${PORT}`));