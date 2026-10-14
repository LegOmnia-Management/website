import express from 'express';
import { honeypot, createWaitlist, createWaitlistQuick } from '../controllers/waitlist.controller.js';
import waitlistGuard from '../middlewares/waitlistGuard.js';
import { validateWaitlist, validateWaitlistQuick } from '../validators/waitlist.validator.js';

const router = express.Router();

router.post('/', honeypot, validateWaitlist, waitlistGuard, createWaitlist);
router.post('/quick', honeypot, validateWaitlistQuick, waitlistGuard, createWaitlistQuick);

export default router;
