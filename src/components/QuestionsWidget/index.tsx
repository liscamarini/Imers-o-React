import React from 'react';

import db from '../../../db.json';
import Button from '../Button';
import Widget from '../Widget';

interface QuestionsProps {
  question: object;
  questionIndex: number;
  totalQuestions: number;
  onSubmit(): void
}

const QuestionWidget: React.FC<QuestionsProps> = ({question,
  questionIndex,
  totalQuestions,
  onSubmit}: QuestionsProps) => {
 const questionbd = db.questions[questionIndex]

  const questionId = `question__${questionIndex}`;
  return (
    <Widget>
      <Widget.Header>
        {/* <BackLinkArrow href="/" /> */}
        <h3>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h3>
      </Widget.Header>

      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={questionbd.image}
      />
      <Widget.Content>
        <h2>
          {questionbd.title}
        </h2>
        <p>
          {questionbd.description}
        </p>

        <form
          onSubmit={(infosDoEvento) => {
            infosDoEvento.preventDefault();
            onSubmit();
          }}
        >
          {questionbd.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            return (
              <Widget.Topic
                as="label"
                htmlFor={alternativeId}
              >
                <input
                  // style={{ display: 'none' }}
                  id={alternativeId}
                  name={questionId}
                  type="radio"
                />
                {alternative}
              </Widget.Topic>
            );
          })}

          {/* <pre>
            {JSON.stringify(question, null, 4)}
          </pre> */}
          <Button type="submit">
            Confirmar
          </Button>
        </form>
      </Widget.Content>
    </Widget>
  );
};

export default QuestionWidget;
