// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import NewslatterSignUp from "./NewslatterSignUp"; // Adjust the path
import ThankYou from "./Thankyou"; // Import your Thank You component
import "./index.css"; // or './App.css'
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NewslatterSignUp />} />
      <Route path="/ThankYou" element={<ThankYou />} />
    </Routes>
  );
};

export default App;
