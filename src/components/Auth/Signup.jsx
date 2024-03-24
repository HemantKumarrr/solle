import { Link } from "react-router-dom"
import { useState } from "react";

const Signup = () => {
    const [userData, setUserData] = useState({ username: '', email: '', password: '', confirmPassword: '' })

    const handleSignup = (e)=> {
        e.preventDefault();
        console.log(userData);
    }

  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sign Up</h2>
          <form className="flex flex-col">
            <input
              type="name"
              className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              placeholder="username"
              onChange={(e)=> setUserData({...userData, username: e.target.value})}
              value={userData.username}
              autoFocus
            />
            <input
              type="email"
              className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              placeholder="Email address"
              onChange={(e)=> setUserData({...userData, email: e.target.value})}
              value={userData.email}
            />
            <input
              type="password"
              className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              placeholder="Password"
              onChange={(e)=> setUserData({...userData, password: e.target.value})}
              value={userData.password}
            />
            <input
              type="password"
              className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              placeholder="Confirm Password"
              onChange={(e)=> setUserData({...userData, confirmPassword: e.target.value})}
              value={userData.confirmPassword}
            />
            <div className="flex items-center justify-between flex-wrap">
              <label
                htmlFor="remember-me"
                className="text-sm text-gray-900 cursor-pointer"
              >
                <input type="checkbox" id="remember-me" className="mr-2" />
                Remember me
              </label>
              <Link
                to='/forgot-password'
                className="text-sm text-blue-500 hover:underline mb-0.5"
              >
                Forgot password?
              </Link>
              <p className="text-gray-900 mt-4">
                {" "}
                already have an account?{" "}
                <Link
                  to='/login'
                  className="text-sm text-blue-500 -200 hover:underline mt-4"
                >
                  Login
                </Link>
              </p>
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
              onClick={handleSignup}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
