import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";

const Register = () => {
  const { createtUser, handleUpdateProfile } = useAuth();
  const [regError, setRegError] = useState('');
  const [viewPassword, setViewPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const img = e.target.img.value;
    const password = e.target.password.value;

    // Reset error messages
    setRegError('');

    // Password validation
    if (password.length < 6) {
      toast.error('Password must be 6 characters or longer');
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error('Password should include at least one uppercase letter, one number, and one symbol');
      return;
    } else if (!/[0-9]/.test(password)) {
      toast.error('Password should include at least one uppercase letter, one number, and one symbol');
      return;
    } else if (!/[ ~!@#$%^&*()+-/*`:;"'<>,.{} ]/.test(password)) {
      toast.error('Password should include at least one uppercase letter, one number, and one symbol');
      return;
    }

    // Create user
    createtUser(email, password)
      .then(res => {
        handleUpdateProfile(name, img)
          .then(() => {
            console.log(res.user);
            toast.success('Account created successfully');
            return navigate('/profile');
          })
      })
      .catch(error => {
        toast.error(error.message);
        return;
      });
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">Register!</h1>
          <form onSubmit={handleRegister}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

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
              <label className="block text-sm font-medium text-gray-700">Image URL</label>
              <input
                type="text"
                name="img"
                placeholder="Image URL (Optional)"
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <div className="relative">
                <input
                  type={viewPassword ? "text" : "password"}
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
            </div>

            <div className="form-control mt-6">
              <button
                type="submit"
                className="w-full py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-md transition duration-300"
              >
                Register
              </button>
            </div>
          </form>

          {regError && <p className="text-red-500 text-center mt-4">{regError}</p>}

          <div className="text-center mt-4">
            <p className="text-sm">Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Login</Link></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
