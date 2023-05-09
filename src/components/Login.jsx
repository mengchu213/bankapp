import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {logo} from "../assets";
import {useContext} from "react";
import {UserContext} from "../UserContext";
import User from "../models/User";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const {setUser} = useContext(UserContext);

  const handleLogin = (e) => {
    e.preventDefault();

    const validEmail = "user@example.com";
    const validPassword = "password123";
    const isAuthenticated = email === validEmail && password === validPassword;
    const token = "your_token_here";

    if (isAuthenticated) {
      localStorage.setItem("userEmail", email);
      localStorage.setItem("authToken", token);
      setUser(new User(email, "password123", "John Doe", 1000));

      navigate("/dashboard");
    } else {
      setErrorMessage("Invalid email or password.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary">
      <div className="w-full max-w-md">
        <img src={logo} alt="geekbank" className="pl-24 mb-6" />

        {errorMessage && (
          <p className="text-red-500 text-center mb-4">{errorMessage}</p>
        )}
        <form onSubmit={handleLogin} className="bg-white rounded-lg p-8">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
