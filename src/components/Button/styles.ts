import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    margin-top: 32px;
    max-width: 286px;
    display: flex;
    margin-bottom: 24px;
    button {
        width: 286px;
        height: 40px;
        background: #5C5EEB;
        border-radius: 5px ;
        border: 0;
        color: #fff;
        font-weight: bold;
        transition: background-color 0.2s;
        &:hover {
          background: ${shade(0.2, '#8986EB')};
        }
  }
`;

