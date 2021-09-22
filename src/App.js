import React, { useEffect, useState } from "react";
import Home from "./components/HomePage/Home";
import Login from "./components/Login/Login";
import AuthContext from "./Store/AuthContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const storedUser = localStorage.getItem("isLoggedIn");
    if (storedUser === "1") {
      setIsLoggedIn(true);
    }
  }, []);
  const LoginHandler = (email, password) => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "1");
  };
  const logOutHandler = () => {
    localStorage.setItem("isLoggedIn", "0");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logOutHandler,
      }}
    >
      <div className="app">
        <Home />
        {!isLoggedIn && <Login onLogin={LoginHandler} />}
      </div>
    </AuthContext.Provider>
  );
}

export default App;
