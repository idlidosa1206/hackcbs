import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../components/LandingPage";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
import Scans from "../components/Scans";
import Checkout from "../components/Checkout";
import { Toaster } from "react-hot-toast";

export default function () {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuth(true);
    }
  }, []);

  return (
    <>
      {/* <LandingPage /> */}
      <Routes>
        <Route path="/" element={<LandingPage isAuth={isAuth} />} />
        <Route path="/scans" element={<Scans isAuth={isAuth} />} />
        <Route path="/login" element={<LoginForm isAuth={isAuth} />} />
        <Route path="/signup" element={<SignupForm isAuth={isAuth} />} />
        <Route path="/checkout" element={<Checkout isAuth={isAuth} />} />
      </Routes>
      <Toaster />
    </>
  );
}
