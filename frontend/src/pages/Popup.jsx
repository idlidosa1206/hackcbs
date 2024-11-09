import { useEffect } from 'react';
import { Route, Routes } from "react-router-dom";

export default function() {
  useEffect(() => {
    console.log("Hello from the popup!");
  }, []);

  return (
    <>
      <Routes>
        {/* <Route path="/" <LandingPage/> */}
        {/* <Route path="/scan" element={<Scans />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/signup" element={<Signup />} /> */}
      </Routes>
    </>
  );
}
