import express from 'express';
import { honeypot, createContact } from '../controllers/contact.controller.js';
import { validateContact } from '../validators/contact.validator.js';

const router = express.Router();

router.post('/', honeypot, validateContact, createContact);

export default router;