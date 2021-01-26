import React from 'react';
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
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
              <p>{db.description}</p>
            {/* <form onSubmit={(e) =>  {
                e.preventDefault()
                router.push(`/QuizPage?name=${name}`)}}>
              <input
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Diz aí seu nome para jogar :)" />
              <button type="submit">JOGAR {name}</button> */}
            {/* </form> */}
          </Widget.Content>
        </Widget>


        <Footer />
        </QuizContainer>
        </QuizBackground>
  )
}

export default QuizPage;
