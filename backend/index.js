require('dotenv').config();
const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

// Összes könyv
app.get('/konyvek', async (req, res) => {
    try {
        const [sorok] = await pool.query('SELECT * FROM konyvek');
        res.json(sorok);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})

// Egy könyv ID alapján
app.get('/konyvek/:id', async (req, res) => {
    try {
        const [sorok] = await pool.query('SELECT * FROM konyvek WHERE id = ?', [req.params.id]);
        if (sorok.length === 0) {
            return res.status(404).json({ error: 'Könyv nem található' });
        }
        res.json(sorok[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Új könyv hozzáadása
app.post('/konyvek', async (req, res) => {
    const { cim, szerzo, kiadas_eve, kategoria, ar } = req.body;
    if (!cim || !szerzo) {
        return res.status(400).json({ error: 'A cím és a szerző mezők kötelezőek' });
    }
    try {
        const [eredmeny] = await pool.query('INSERT INTO konyvek (cim, szerzo, kiadas_eve, kategoria, ar) VALUES (?, ?, ?, ?, ?)',
      [cim, szerzo, kiadas_eve || null, kategoria || null, ar || 0]);
      res.status(201).json({ id: eredmeny.insertId, cim, szerzo, kiadas_eve, kategoria, ar });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Könyv módosítása
app.put('/konyvek/:id', async (req, res) => {
  const { cim, szerzo, kiadas_eve, kategoria, ar } = req.body;
  if (!cim || !szerzo) {
    return res.status(400).json({ hiba: 'A cím és a szerző megadása kötelező' });
  }
  try {
    const [eredmeny] = await pool.query(
      'UPDATE konyvek SET cim = ?, szerzo = ?, kiadas_eve = ?, kategoria = ?, ar = ? WHERE id = ?',
      [cim, szerzo, kiadas_eve || null, kategoria || null, ar || 0, req.params.id]
    );
    if (eredmeny.affectedRows === 0) {
      return res.status(404).json({ hiba: 'A könyv nem található' });
    }
    res.json({ id: Number(req.params.id), cim, szerzo, kiadas_eve, kategoria, ar });
  } catch (err) {
    res.status(500).json({ hiba: err.message });
  }
});

// Könyv törlése
app.delete('/konyvek/:id', async (req, res) => {
  try {
    const [eredmeny] = await pool.query('DELETE FROM konyvek WHERE id = ?', [req.params.id]);
    if (eredmeny.affectedRows === 0) {
      return res.status(404).json({ hiba: 'A könyv nem található' });
    }
    res.json({ uzenet: 'A könyv törölve' });
  } catch (err) {
    res.status(500).json({ hiba: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`A szerver fut: http://localhost:${PORT}`));