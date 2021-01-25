import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 32px;
    max-width: 286px;
    display: flex;
    margin-bottom: 24px;
  input {
    flex: 1;
    height: 40px;
    padding: 0 16px;
    border: 0;
    background-color: #10101C;
    border-radius: 5px ;
    color: #5E1017;
    border: 2px solid #5E1017;
    border-right: 0;

    &::placeholder {
      color: #a8a8b3;
    }
  }

`;
