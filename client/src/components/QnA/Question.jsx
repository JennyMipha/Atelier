import React from 'react';
import propTypes from 'prop-types';
import Answers from './Answers';

function Question({ question, questionId }) {
  const answerKey = Object.keys(question.answers);
  const answerList = answerKey.map((Ans) => question.answers[Ans]);
  return (
    <div>
      {console.log('QUESTION, question = ', question)}
      <span>
        Q:
        {question.question_body}
      </span>
      {answerList.map((answer, count) => (
        <Answers
          key={answer.id}
          answer={answer}
        />
      ))}

    </div>
  );
}
Question.propTypes = {
  questionId: propTypes.number,
  // question_body: propTypes.string,
  question: propTypes.objectOf(propTypes.oneOf(propTypes.any)).isRequired,
};

Question.defaultProps = {
  questionId: 40351,
  // question: {},
};

export default Question;
