import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';

export const signup = async (req, res, next) => {
  
    const { fullname, username, email, password, phoneNumber, bio } = req.body;

    // Hash and salt the user password
    const hashedPassword = await bcryptjs.hashSync(password, 10);

    // Create a new user instance
    const newUser = new User({
      fullname,
      username,
      email,
      password: hashedPassword,
      phoneNumber,
      bio,
    });

    try {
         // Save the user to the database
    const savedUser = await newUser.save();

    res.status(201).json("User Created successfully");
    } catch (error) {
       next(error)
    }
   
  
};