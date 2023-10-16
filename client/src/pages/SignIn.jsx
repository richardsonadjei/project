import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signinStart, signinSuccess, signinFailure } from '../redux/user/userSlice';
import OAuth from '../components/OAuth';

const SignIn = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    username: '',
    email: '',
    password: '',
    phoneNumber: '',
    bio: '',
  });
const {Loading, error } =useSelector((state)=> state.user);
const navigate =useNavigate();

const dispatch =useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  console.log(formData)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signinStart())
    // Handle form submission here
    const res = await fetch('api/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (data.success === false){
      dispatch(signinFailure(data.message));
      return;
    }
    dispatch(signinSuccess(data));
    navigate('/');
    // setResponse(data); 
    console.log(data);
    } catch (error) {
      dispatch(signinFailure(error.message));
    }

    
   
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Sign In</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <label className="text-gray-700">Email:</label>
          <input
            type="email"
            value={formData.email}  // Use formData.email
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}  // Update formData.email
            required
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
          />
          
          <label className="text-gray-700">Password:</label>
          <input
            type="password"
            value={formData.password}  // Use formData.password
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}  // Update formData.password
            required
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
          />
          {/* Centered Submit Button */}
          <div className="text-center">
            <button disabled={Loading}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-70"
              type="submit"
             
            >
              
              {Loading ? 'Loading...': 'Sign In'}
            </button>
            
          </div>
          <OAuth />
        </form>
        <p className="mt-4 text-gray-600 text-center">
          Not having an account?{' '}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
