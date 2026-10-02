import express from 'express';
import { honeypot, createWaitlist } from '../controllers/waitlist.controller.js';
import { validateWaitlist } from '../validators/waitlist.validator.js';

const router = express.Router();

router.post('/', honeypot, validateWaitlist, createWaitlist);

export default router;
