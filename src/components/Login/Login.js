import React, { useState } from "react";
import styles from "./Login.module.css";
function Login(props) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim().length == 0 || pass.trim().length == 0) {
      return;
    }
    props.onLogin(email, pass);
    setEmail("");
    setPass("");
  };
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles["input-controls"]}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email address"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles["input-controls"]}>
          <label htmlFor="pass">Password</label>
          <input
            type="password"
            id="pass"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="password"
          />
        </div>
        <div className="input-controls">
          <button className={styles.button}>Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
