import { Questions } from 'data';

const QuestionsPage = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const questionNumber = questionIndex + 1;
  const [correctCount, setCorrectCount] = useState(0);

  const onSubmit = () => {
    setQuestionIndex(questionIndex + 1);
  };

  const onTrue = () => {
    onSubmit();
    setCorrectCount(correctCount + 1);
  };

  const onFalse = () => {
    onSubmit();
  };

  const history = useHistory();

  useEffect(() => {
    if (questionNumber > Questions.length) {
      history.push(
        `/test/results?score=${correctCount}&outOf=${questionNumber}`
      );
    }
  }, [questionNumber]);

  return (
    <div>
      <div className={styles.facts}>
        <h2>Question {questionNumber + '/' + Questions.length}</h2>
        <h2>Score {correctCount + '/' + Questions.length}</h2>
      </div>

      {questionIndex < Questions.length && (
        <Question {...Questions[questionIndex]} {...{ onTrue, onFalse }} />
      )}
    </div>
  );
};

const Question = ({ imgSrc, options, correct, onTrue, onFalse }) => {
  return (
    <div>
      <img src={'/assets/test/' + imgSrc} alt="color_test_picture" />
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor=""> What number do you see?</label>
        {options.map((x) => (
          <button onClick={x === correct ? onTrue : onFalse}>{x}</button>
        ))}

        <button>nothing</button>
        <button>unsure?</button>
      </form>
    </div>
  );
};

export default QuestionsPage;
