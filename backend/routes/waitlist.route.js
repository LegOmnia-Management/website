import express from 'express';
import { honeypot, createWaitlist, createWaitlistQuick } from '../controllers/waitlist.controller.js';
import { validateWaitlist, validateWaitlistQuick } from '../validators/waitlist.validator.js';

const router = express.Router();

router.post('/', honeypot, validateWaitlist, createWaitlist);
router.post('/quick', honeypot, validateWaitlistQuick, createWaitlistQuick);

export default router;
