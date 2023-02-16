import Logincard from '../components/Logincard';
import styles from '../styles/login.module.css';

const Login = () => {
  async function post(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'no-cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  const doLogin = (username, password) => {
    post(
      'https://nextjsgx2yj9-ebi1--3000.local-credentialless.webcontainer.io/api/login',
      { user: username, pass: password }
    ).then((data) => {
      console.log(data);
    });
  };
  return (
    <div className={styles.center}>
      <Logincard submitEvent={doLogin} />
    </div>
  );
};
export default Login;
