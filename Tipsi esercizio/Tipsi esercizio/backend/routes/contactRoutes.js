const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const { createContact, getContacts, updateContact, deleteContact } = require('../controllers/contactController');
const router = express.Router();

router.post('/', authMiddleware, createContact);
router.get('/', authMiddleware, getContacts);
router.put('/', authMiddleware, updateContact);
router.delete('/', authMiddleware, deleteContact);

module.exports = router;
