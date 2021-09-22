import React, { useEffect, useState } from "react";
import styles from "./Login.module.css";
function Login(props) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [isPass, setIspass] = useState(true);
  const [isEmail, setIsEmail] = useState(true);
  const [validForm, setValidForm] = useState(false);
  const [btnDis, setBtnDis] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      email.trim().length == 0 ||
      (email.trim().length > 0) & !email.includes("@") ||
      pass.trim().length < 6
    ) {
      setIsEmail(false);
      setIspass(false);
      return;
    }
    pass && pass.trim().length < 6 ? setIspass(false) : setIspass(true);
    props.onLogin(email, pass);
    setEmail("");
    setPass("");
  };
  useEffect(() => {
    setTimeout(() => {
      (email.trim().length > 0) & !email.includes("@")
        ? setIsEmail(false)
        : setIsEmail(true);
      pass && pass.trim().length < 6 ? setIspass(false) : setIspass(true);
    }, 2000);
  }, [email, pass]);
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
          {!isEmail && <p className={styles.error}>Email must contain @</p>}
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
          {!isPass && (
            <p className={styles.error}>Password must be 7 chars long</p>
          )}
        </div>
        <div className="input-controls">
          <button className={styles.button}>Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
