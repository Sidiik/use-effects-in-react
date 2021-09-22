import React, { useContext } from "react";
import AuthContext from "../../Store/AuthContext";
import styles from "./Home.module.css";

function Home(props) {
  const ctx = useContext(AuthContext);
  const logout = () => {
    props.logOutHandler();
  };
  return (
    <div className={styles.container}>
      <header>
        <div className="logo">
          <h2>Typical page</h2>
        </div>
        {ctx.isLoggedIn && (
          <>
            <div className={styles.left}>
              <div className={styles.link}>
                <p>Users</p>
                <p>Admin</p>
              </div>
              <div>
                <button className={styles.button} onClick={ctx.onLogout}>
                  Logout
                </button>
              </div>
            </div>
          </>
        )}
      </header>
      {ctx.isLoggedIn && (
        <div className={styles.welcomePage}>
          <h1>Welcome back!</h1>
        </div>
      )}
    </div>
  );
}

export default Home;
