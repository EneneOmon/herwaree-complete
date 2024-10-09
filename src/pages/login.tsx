/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import ConnectWalletButton from "../pages/WalletWidget";
import Img4 from "../assets/sol.png";
import ToastNotification from "../components/notif";

import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showWalletWidget, setShowWalletWidget] = useState<boolean>(false);
  const [toast, setToast] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const navigate = useNavigate();
  const auth = getAuth();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [toast]);

  // Email and password submit handler
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email || !password) {
      setToast({
        type: "error",
        message: "Please enter both email and password.",
      });
      return;
    }

    // Firebase email/password authentication
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setToast({ type: "success", message: "Login successful!" });

        setTimeout(() => {
          navigate("/herwaree/introduce");
        }, 2000);
      })
      .catch((error) => {
        console.error("Login error:", error);
        setToast({ type: "error", message: (error as any).message }); // Type assertion for the error message
      });
  };

  // Google login handler
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      setToast({ type: "success", message: "Google login successful!" });
      setTimeout(() => {
        navigate("/herwaree/introduce");
      }, 2000);
    } catch (error) {
      console.error("Google login error:", error);
      setToast({ type: "error", message: (error as any).message });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white-50 overflow-x-hidden">
      {toast && <ToastNotification toast={toast} />}

      <div className="relative p-6 rounded-lg max-w-md w-full">
        <h1
          className="text-2xl font-bold text-center mb-8 mt-10"
          style={{
            backgroundImage: "linear-gradient(to right, #b976c5, #b390c9)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Welcome to Herwaree
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Enter your email and password to login to Herwaree
        </p>

        {/* Google Login Button */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="flex items-center justify-center w-full bg-white text-gray-700 py-2 px-4 rounded-lg border border-gray-300 mb-4 hover:bg-gray-100"
        >
          <FaGoogle className="h-5 w-5 mr-2" />
          Continue with Google
        </button>

        {/* Email & Password Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block"
              style={{
                backgroundImage: "linear-gradient(to right, #b976c5, #b390c9)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2"
              style={{
                borderColor: "#b976c5",
                boxShadow: "0px 0px 5px rgba(183, 118, 197, 0.5)",
              }}
            />
          </div>

          <div className="mb-6 relative">
            <label
              className="block"
              style={{
                backgroundImage: "linear-gradient(to right, #b976c5, #b390c9)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2"
              style={{
                borderColor: "#b976c5",
                boxShadow: "0px 0px 5px rgba(183, 118, 197, 0.5)",
              }}
            />
            <div
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600 cursor-pointer"
              style={{ top: "70%", transform: "translateY(-50%)" }}
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-lg hover:bg-purple-800"
            style={{
              backgroundImage: "linear-gradient(to right, #b976c5, #b390c9)",
              color: "#fff",
            }}
          >
            Login
          </button>
        </form>

        {/* Signup Redirect */}
        <p className="text-center text-gray-500 mt-6">
          Don't have an account?{" "}
          <Link
            to="/herwaree/signup"
            className="hover:underline"
            style={{
              backgroundImage: "linear-gradient(to right, #b976c5, #b390c9)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Sign up
          </Link>
        </p>

        {/* Wallet Login Button */}
        <div className="text-center mt-4">
          <button
            onClick={() => setShowWalletWidget(!showWalletWidget)}
            className="w-full flex items-center justify-center py-2 rounded-lg mt-2 transition-colors"
            style={{
              backgroundImage: "linear-gradient(to right, #b976c5, #b390c9)",
              color: "#fff",
            }}
          >
            <img src={Img4} alt="Wallet" className="h-5 w-5 mr-2" />
            Sign in with wallet
          </button>
        </div>

        {/* Wallet Connect Widget */}
        {showWalletWidget && (
          <div className="flex justify-center mt-8">
            <div className="p-4 bg-purple-100 rounded-lg">
              <ConnectWalletButton />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
