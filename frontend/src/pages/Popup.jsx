import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../components/LandingPage";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
import Scans from "../components/Scans";
export default function () {
  useEffect(() => {
    console.log("Hello from the popup!");
  }, []);

  return (
    <>
      {/* <LandingPage /> */}
      <Routes>
        {/* <Route path="/" element={<LandingPage/>} /> */}
        <Route path="/" element={<Scans />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
    </>
  );
}
