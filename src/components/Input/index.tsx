import React, { InputHTMLAttributes } from 'react';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange(e: any): void;

  name: string;
}

const Input: React.FC<InputProps> = ({name,  onChange, ...rest}: InputProps) => {

  return (
    <Container>
       <input
        name={name}
        onChange={onChange}
        {...rest} />
    </Container>
  )
}

export default Input;
