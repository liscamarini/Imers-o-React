import React from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { QuizContainer } from '.';
import db from '../db.json';
import Footer from '../src/components/Footer';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import Widget from '../src/components/Widget';

const QuizPage: React.FC = () => {

  return (
      <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <Widget.Icon>
              <FiChevronLeft style={{color: 'white'}} size={20}/>
            </Widget.Icon>
            <h2>{db.questions.title}</h2>
          </Widget.Header>
          <QuizBackground.Image backgroundImage={db.questions.image} />
          <Widget.Content>
            <p>{db.questions.description}</p>
            <Widget.Button>
              <h4>Rammstein</h4>
            </Widget.Button>
            <Widget.Button>
              <h4>Rocky Raccoon</h4>
            </Widget.Button>
            <Widget.Button>
              <h4>Beatles</h4>
            </Widget.Button>
            <Widget.Button>
              <h4>The Who</h4>
            </Widget.Button>
            <button type="submit">Confirmar</button>
          </Widget.Content>
        </Widget>


        <Footer />
        </QuizContainer>
        </QuizBackground>
  )
}

export default QuizPage;
