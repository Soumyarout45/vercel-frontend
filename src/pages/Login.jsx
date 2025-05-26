import React, { useContext, useState,useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const AuthForm = () => {

  const{backendUrl,token,setToken}=useContext(AppContext)
  const navigate=useNavigate()
  const [authMode, setAuthMode] = useState('Login'); // Toggle between 'Login' and 'Sign Up'
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      if (authMode === 'Sign Up') {
        const res = await axios.post(`${backendUrl}api/user/register`, {
          name,
          email,
          password,
        });
  
        if (res.data.success) {
          setToken(res.data.token);
          localStorage.setItem("authToken", res.data.token);
          alert("Account created successfully!");
        } else {
          alert(res.data.message || "Registration failed.");
        }
  
      } else {
        const res = await axios.post(`${backendUrl}api/user/login`, {
          email,
          password,
        });
  
        if (res.data.success) {
          setToken(res.data.token);
          localStorage.setItem("authToken", res.data.token);
          alert("Logged in successfully!");
        } else {
          alert(res.data.message || "Login failed.");
        }
      }
  
    } catch (error) {
      console.error(error);
      alert("Something went wrong! Please try again.");
    }
  };
  useEffect(() => {
    if (token) {
      navigate('/')
    }
  
  }, [token])
  
  

  return (
    <form onSubmit={handleSubmit} className='min-h-[80vh] flex items-center justify-center bg-[#81ffe4]'>
      <div className='flex flex-col gap-6 bg-white m-auto items-start p-10 w-[90%] sm:w-[400px] md:w-[500px] lg:w-[600px] border rounded-2xl text-zinc-700 text-[17px] shadow-2xl'>
        <p className='text-3xl font-bold text-teal-600'>
          {authMode === 'Sign Up' ? 'Create Account' : 'Login'}
        </p>
        <p className="text-lg text-gray-500 mb-4">
          Please {authMode === 'Sign Up' ? 'sign up' : 'log in'} to book an appointment
        </p>

        {authMode === 'Sign Up' && (
          <div className="w-full">
            <p className='mb-1 font-medium'>Full Name:</p>
            <input
              type="text"
              className="w-full border px-4 py-3 text-[16px] rounded-lg focus:outline-none focus:border-teal-500"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>
        )}

        <div className="w-full">
          <p className='mb-1 font-medium'>Email:</p>
          <input
            type="email"
            className="w-full border px-4 py-3 text-[16px] rounded-lg focus:outline-none focus:border-teal-500"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>

        <div className="w-full">
          <p className='mb-1 font-medium'>Password:</p>
          <input
            type="password"
            className="w-full border px-4 py-3 text-[16px] rounded-lg focus:outline-none focus:border-teal-500"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full mt-4 bg-teal-500 text-white text-lg py-3 rounded-lg hover:bg-teal-600 transition font-semibold"
        >
          {authMode === 'Sign Up' ? 'Create Account' : 'Login'}
        </button>

        <p className="text-base mt-2 text-center w-full">
          {authMode === 'Sign Up' ? (
            <>
              Already have an account?{' '}
              <span
                className='text-teal-600 hover:underline cursor-pointer'
                onClick={() => setAuthMode('Login')}
              >
                Login here
              </span>
            </>
          ) : (
            <>
              Create a new account?{' '}
              <span
                className='text-teal-600 hover:underline cursor-pointer'
                onClick={() => setAuthMode('Sign Up')}
              >
                Click here
              </span>
            </>
          )}
        </p>
      </div>
    </form>
  );
};

export default AuthForm;
