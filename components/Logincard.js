import { useState } from 'react';
import styles from '../styles/login.module.css';

const Logincard = (props) => {
  const [username, setUsername] = useState('');
  const [password, setpassword] = useState('');

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };
  const passwordChangehandler = (event) => {
    setpassword(event.target.value);
  };
  const submitHandler = (event) => {
    props.submitEvent(username, password);
  };

  return (
    <div className={styles.loginCard}>
      <h1>Login</h1>
      <div className={styles.loginCard__form}>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            name="username"
            id="username"
            onChange={usernameChangeHandler}
          />
          <input
            type="password"
            name="password"
            id="password"
            onChange={passwordChangehandler}
          />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};
export default Logincard;
