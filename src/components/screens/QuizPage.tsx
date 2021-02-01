import React, { useCallback, useEffect, useState } from 'react';

import db from '../../../db.json';
import QuizContainer from '../../components/QuizContainer';
import Footer from '../../components/Footer';
import QuizBackground from '../../components/QuizBackground';
import QuizLogo from '../../components/QuizLogo';
import Widget from '../../components/Widget';
import Button from '../../components/Button';
import QuizResult from '../../components/QuizResult';

function LoadingWidget(){
  return (
   <>
      <div>
        Página de quiz
      </div>
      <Widget>
        <Widget.Header>
          Carregando...
        </Widget.Header>

        <Widget.Content>
          [Desafio do Loading]
        </Widget.Content>
    </Widget>

   </>
  );
}

function QuestionWidget({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
}) {
  const questionId = `question__${questionIndex}`;
  const [selectedAlternative, setSelectedAlternative] = useState(undefined);
  const [isQuestionSubmit, setIsQuestionSubmit] = useState(false);
  const isCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;
  return (
    <Widget>
      <Widget.Header>
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
        src={question.image}
      />
      <Widget.Content>
        <h4>
          {question.title}
        </h4>
        <p>
          {question.description}
        </p>

        <form
          onSubmit={(infosDoEvento) => {
            infosDoEvento.preventDefault();
            setIsQuestionSubmit(true);
            setTimeout(() => {
              onSubmit();
              setIsQuestionSubmit(false);
              setSelectedAlternative(undefined);
            }, 2 * 1000);

          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            return (
              <Widget.Topic
                as="label"
                htmlFor={alternativeId}
              >
                <input
                  id={alternativeId}
                  name={questionId}
                  onChange={() => setSelectedAlternative(alternativeIndex)}
                  type="radio"
                />
                {alternative}
              </Widget.Topic>
            );
          })}
          <Button type="submit" disabled={!hasAlternativeSelected}>
            Confirmar
          </Button>
          <p>Alternativa: {`${selectedAlternative}`}</p>
          {isQuestionSubmit && isCorrect && <p>Você Acertooou!!!</p>}
          {isQuestionSubmit && !isCorrect && <p>Erroooou!!!</p>}
        </form>

      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};
const QuizPage: React.FC = () => {
  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const totalQuestions = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];
  const [results, setResults] = useState([]);

  function addResult(result) {
    setResults([
      ...results,
      result,
    ]);
  }



  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000);
   }, []);

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
     {screenState === screenStates.QUIZ && (
        <QuizContainer>
          <QuizLogo />
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
          />
        </QuizContainer>
      )}
      {screenState === screenStates.LOADING && (
        <QuizContainer>
          <QuizLogo />
          <LoadingWidget />
        </QuizContainer>
      )}
      {screenState === screenStates.RESULT && (
        <QuizContainer>
          <QuizLogo />
          <QuizResult />
        </QuizContainer>
      )}
    </QuizBackground>
  );
}

export default QuizPage;
