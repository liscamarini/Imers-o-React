import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 16px;
    max-width: 286px;
    display: flex;

  input {
    flex: 1;
    height: 40px;
    padding: 0 16px;
    border: 0;
    background-color: #10101C;
    border-radius: 5px ;
    color: #fff;
    border: 2px solid #5E1017;
    border-right: 0;

    &::placeholder {
      color: #a8a8b3;
    }
  }

`;
