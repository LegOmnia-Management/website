import express from 'express';
import { createContact, readContacts } from '../controllers/contact.controller.js';
import { validateContact } from '../validators/contact.validator.js';

const router = express.Router();

router.get('/', readContacts);
router.post('/', validateContact, createContact);

export default router;