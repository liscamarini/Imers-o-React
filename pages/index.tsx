import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link'

import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget'
import QuizLogo from '../src/components/QuizLogo'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizContainer from '../src/components/QuizContainer';


export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

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
            <form onSubmit={(e) =>  {
                e.preventDefault()
                router.push(`/QuizPage?name=${name}`)}}>
              <Input
                  name="nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Diz aí seu nome para jogar :)" />
              <Button
               name="entrar"
               type="submit"
               disabled={name.length === 0}
               >
                JOGAR {name}
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>
            <p>Dê uma olhada nesses quizes incríveis que o pessoal fez! </p>
            <ul>
              <li>
              <Link href='https://quiz-noticia-verdadeira.biacoelho.vercel.app/' passHref>
              <Widget.Button>
               <h4>bia-coelho/noticia-verdadeira</h4>
              </Widget.Button>
              </Link>

              </li>
              <li>
                <Link href="https://aluraquiz-vacinacao.vercel.app/" passHref>
                <Widget.Button> <h4>marcio-bernardes/vacinacao</h4></Widget.Button>
                </Link>
              </li>
              <li>
                <Link href="https://wanda-vision-aluraquiz.marilira.vercel.app/" passHref>
                <Widget.Button> <h4>marilia/wanda-vision-aluraquiz</h4></Widget.Button>
                </Link>
             </li>
            </ul>
          </Widget.Content>
        </Widget>
        <Footer />
        </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/liscamarini/Imersao-React" />


    </QuizBackground>
  )
}
