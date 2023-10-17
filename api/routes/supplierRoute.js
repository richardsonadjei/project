// supplierRoute.js

import express from 'express';
import createSupplier from '../controllers/create.Supplier.Controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

// POST request to create a new supplier
router.post('/',verifyToken, createSupplier);

export default router;
