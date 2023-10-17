// createSupplierController.js

import Supplier from '../models/supplier.model.js';

const createSupplier = async (req, res) => {
  try {
    const { name, contactPerson, email, phone, address } = req.body;

    // Create a new Supplier instance
    const newSupplier = new Supplier({
      name,
      contactPerson,
      email,
      phone,
      address,
    });

    // Save the new Supplier to the database
    const savedSupplier = await newSupplier.save();

    res.status(201).json(savedSupplier);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default createSupplier;
