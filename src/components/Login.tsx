import React from "react"
import styles from './Login.module.css'

function Login() {
  return (
    <div className={styles.box}>
      <div className={styles.form}>
        <h2>Sign in</h2>
        <div className={styles.inputBox}>
          <input type="text" required aria-label="Username" />
          <span>Username</span>
          <i></i>
        </div>
        <div className={styles.inputBox}>
          <input type="password" required  aria-label="Password"/>
          <span>Password</span>
          <i></i>
        </div>
        <div className={styles.links}>
          <a href="h">Forgot Password</a>
          <a href="h">Signup</a>
        </div>
        <input type="submit" value="Login" />
      </div>
    </div>
  )
}

export default Login