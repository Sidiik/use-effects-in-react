import React, { useState } from "react";
import Home from "./components/HomePage/Home";
import Login from "./components/Login/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const LoginHandler = (email, password) => {
    setIsLoggedIn(true);
  };
  return (
    <div className="app">
      <Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      {!isLoggedIn && <Login onLogin={LoginHandler} />}
    </div>
  );
}

export default App;
