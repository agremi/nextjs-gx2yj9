import styles from '../styles/Racer.module.css';

const RacerBlock = (props) => {
  return (
    <div className={[styles.basic_block, styles.grow].join(' ')}>
      <div className="basic_block_propic">
        <img
          className={styles.propic_pic}
          src="https://via.placeholder.com/50"
        />
      </div>
      <div className="basic_block_bio">
        <h4>{props.name}</h4>
      </div>
    </div>
  );
};

export default RacerBlock;
