import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../Hooks/useAuth';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import toast from 'react-hot-toast';

const Login = () => {
  const navigate = useNavigate();
  const { signInUser, signInWithGoogle } = useAuth();
  const location = useLocation();
  const [logError, setLogError] = useState('');
  const [success, setSuccess] = useState('');
  const [viewPassword, setViewPassword] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false); // added loading state for Google

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (password.length < 6) {
      toast.error('Please check your password');
      return;
    }

    signInUser(email, password)
      .then(result => {
        setSuccess('Logged in successfully');
        setLogError('');
        toast.success('Logged in Successfully');
        e.target.reset();
        navigate(location?.state ? location.state : '/');
      })
      .catch(error => {
        setLogError(error.message);
        setSuccess('');
        toast.error('Please check your email and password');
      });
  };

  const handleGoogleSignIn = () => {
    if (googleLoading) return; // prevent multiple popups
    setGoogleLoading(true);

    signInWithGoogle()
      .then(result => {
        setSuccess('Logged in successfully');
        setLogError('');
        toast.success('Logged in Successfully');
        navigate('/');
      })
      .catch(error => {
        setLogError(error.message);
        setSuccess('');
        toast.error('Login failed. Try again');
      })
      .finally(() => setGoogleLoading(false));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">Login Now</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <input
                type={viewPassword ? 'text' : 'password'}
                name="password"
                placeholder="Enter your password"
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <span
                className="absolute top-3 right-3 cursor-pointer"
                onClick={() => setViewPassword(!viewPassword)}
              >
                {viewPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <a href="#" className="text-sm text-blue-500 hover:underline mt-2 block text-right">Forgot password?</a>
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="w-full py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-md transition duration-300"
            >
              Login
            </button>
          </div>
        </form>

        {logError && <p className="text-red-500 text-center mb-4">{logError}</p>}
        {success && <p className="text-green-500 text-center mb-4">{success}</p>}

        <div className="text-center mt-4">
          <p className="text-sm">Don't have an account? <Link to="/register" className="text-blue-600 hover:underline">Register</Link></p>
        </div>

        <div className="mt-4 flex justify-center">
          <button
            onClick={handleGoogleSignIn}
            disabled={googleLoading}
            className={`flex items-center justify-center py-3 px-6 w-full text-white rounded-md transition duration-300
              ${googleLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-gray-600 hover:bg-gray-700'}`}
          >
            <FcGoogle className="mr-2" /> {googleLoading ? 'Signing in...' : 'Login with Google'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;