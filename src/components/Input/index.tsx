import React, { useState } from 'react';
import { Container } from './styles';


const Input: React.FC = () => {
  const [input, setInput] = useState('');
  return (
    <Container>
       <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Diz aí seu nome para jogar :)" />
    </Container>
  )
}

export default Input;
