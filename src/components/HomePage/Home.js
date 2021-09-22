import React from "react";
import styles from "./Home.module.css";

function Home(props) {
  const logout = () => {
    props.setIsLoggedIn(false);
  };
  return (
    <div className={styles.container}>
      <header>
        <div className="logo">
          <h2>Typical page</h2>
        </div>
        {props.isLoggedIn && (
          <>
            <div className={styles.left}>
              <div className={styles.link}>
                <p>Users</p>
                <p>Admin</p>
              </div>
              <div>
                <button className={styles.button} onClick={logout}>
                  Logout
                </button>
              </div>
            </div>
          </>
        )}
      </header>
      {props.isLoggedIn && (
        <div className={styles.welcomePage}>
          <h1>Welcome back!</h1>
        </div>
      )}
    </div>
  );
}

export default Home;
