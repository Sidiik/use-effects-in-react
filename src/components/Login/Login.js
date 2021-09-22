import React, { useState } from "react";
import styles from "./Login.module.css";
function Login(props) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [isPass, setIspass] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    pass.trim().length < 7 ? setIspass(false) : setPass(true);
    if (email.trim().length == 0) {
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
            type="text"
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
            onChange={(e) => {
              setPass(e.target.value);
              setIspass(true);
            }}
            placeholder="password"
          />
          {!isPass && <p className={styles.error}>Password may not be valid</p>}
        </div>
        <div className="input-controls">
          <button className={styles.button}>Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
