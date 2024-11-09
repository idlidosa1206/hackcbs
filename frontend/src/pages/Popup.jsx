import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../components/LandingPage";

export default function () {
  useEffect(() => {
    console.log("Hello from the popup!");
  }, []);

  return (
    <>
      <LandingPage />
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        {/* <Route path="/scan" element={<Scans />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/signup" element={<Signup />} /> */}
      </Routes>
    </>
  );
}
