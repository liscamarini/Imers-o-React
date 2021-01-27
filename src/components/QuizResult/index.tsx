import React, { useState } from 'react';

import db from '../../../db.json'
import Widget from '../Widget';

const QuizResult: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];
  return (
    <Widget>
      <Widget.Header>
        <h3>
          Parabéns você acerto: {question.answer}
        </h3>
      </Widget.Header>
      <Widget.Content>
        <h2>
          0 de 5 (Resultado fake)
        </h2>
        <p>
          Ainda melhorando os resultados
        </p>
      </Widget.Content>
    </Widget>
  );
}

export default QuizResult;
