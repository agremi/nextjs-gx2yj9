import styles from '../styles/TopHeader.module.css';

const TopHeader = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h1>Nanni Galli trophy</h1>
      </div>
      <button>Login</button>
    </div>
  );
};

export default TopHeader;
