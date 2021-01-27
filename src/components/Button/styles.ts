import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  width: 286px;
  height: 40px;
  margin-top: 24px;
  max-width: 286px;
  display: flex;
  justify-content: center;
  align-items: center;

  background: #5C5EEB;
  border-radius: 5px ;
  border: 0;
  color: #fff;
  font-weight: bold;
  transition: background-color 0.2s;
    &:hover {
     background: ${shade(0.2, '#8986EB')};
    }

`;

