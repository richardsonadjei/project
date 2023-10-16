import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Define the user schema
const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: [true, 'Please enter your full name'],
    unique:true,
  },
  username: {
    type: String,
    required: [true, 'Please enter a username'],
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    validate: {
      validator: function (value) {
        // Simple email validation using regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
      },
      message: 'Please enter a valid Email',
    },
  },
  password: {
    type: String,
    validate: {
      validator: function (value) {
        return value.length >= 6;
      },
      message: 'Password must be more than six(6) characters',
    },
  },
  avatar:{
    type:String,
    default:"https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
  },
  phoneNumber: {
    type: String,
    required: [true, 'Phone number is required'],
  },
  bio: {
    type: String,
    required: [true, 'Bio is required'],
    maxlength: [300, 'Bio cannot exceed 300 characters'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the user model
const User = mongoose.model('User', userSchema);

export default User;

