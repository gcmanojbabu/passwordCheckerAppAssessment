const router = require('express').Router();

import { addPasswordController, getPasswordController } from '../controllers/appController';
import { healthStatus } from '../controllers/healthController';

// health
router.get('/health', healthStatus);

// app
router.post('/savePassword', addPasswordController);
router.get('/getPassword', getPasswordController);

module.exports = router;

