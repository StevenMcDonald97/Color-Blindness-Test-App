import styles from './index.module.css';

const TestPage = () => {
  return (
    <div className={styles.page}>
      <h1>this is the test page</h1>
      <img src="/assets/test/example.jpg" alt="color_blind_picture" />
      <form action="">
        <label htmlFor=""> What number do you see?</label>
      </form>
    </div>
  );
};

export default TestPage;
