import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Profile from "./user/Profile";
import Register from "./auth/Register";
import VerifyEmail from "./auth/VerifyEmail";
import Login from "./auth/Login";
import PrivateRoute from "./PrivateRoute";

import { useState, useEffect } from "react";
import { AuthProvider } from "./context/AuthContext";
import { auth } from "./firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

// piyush components
import { Home, Navbar, StressQues,Survey,Booking } from "./components";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [timeActive, setTimeActive] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <BrowserRouter>
      <AuthProvider value={{ currentUser, timeActive, setTimeActive }}>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <PrivateRoute>
                
                <Home/>
                <Navbar/>
              </PrivateRoute>
            }
          />

          <Route
            path="/quiz"
            element={
              <PrivateRoute>
                <Navbar/>
               <Survey/>
              </PrivateRoute>
            }
          ></Route>

          <Route
            path="/quiz2"
            element={
              <PrivateRoute>
                <Navbar />
                <StressQues />
              </PrivateRoute>
            }
          ></Route>
            <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Navbar/>
               <Profile/>
              </PrivateRoute>
            }
          ></Route>

          <Route path="/booking" element={<><Navbar/><Booking/></>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
