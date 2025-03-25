const db = require('../config/db');

const createContact = (req, res) => {
    const { name, phone } = req.body;
    const userId = req.userId;

    db.query('INSERT INTO contacts (user_id, name, phone) VALUES (?, ?, ?)', [userId, name, phone], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error creating contact' });
        }
        res.status(201).json({ message: 'Contact created successfully' });
    });
};

const getContacts = (req, res) => {
    const userId = req.userId;

    db.query('SELECT * FROM contacts WHERE user_id = ?', [userId], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error retrieving contacts' });
        }
        res.json(result);
    });
};

const updateContact = (req, res) => {
    const { id, name, phone } = req.body;
    const userId = req.userId;

    db.query('UPDATE contacts SET name = ?, phone = ? WHERE id = ? AND user_id = ?', [name, phone, id, userId], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error updating contact' });
        }
        res.json({ message: 'Contact updated successfully' });
    });
};

const deleteContact = (req, res) => {
    const { id } = req.body;
    const userId = req.userId;

    db.query('DELETE FROM contacts WHERE id = ? AND user_id = ?', [id, userId], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error deleting contact' });
        }
        res.json({ message: 'Contact deleted successfully' });
    });
};

module.exports = { createContact, getContacts, updateContact, deleteContact };
