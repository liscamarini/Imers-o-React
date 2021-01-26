import { shade } from 'polished';
import styled from 'styled-components'

 const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background: linear-gradient(#000028, #150354, #420B47, #541610, #97020B,#E72838);
  border-radius: 4px;
  overflow: hidden;
  h1, h2, h3 {
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    color: #C4C7EA;
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};

  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }

  input {
    margin-top: 24px;
    /* margin-bottom: 24px; */
    width: 250px;
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

  button {
        margin-top: 24px;
        /* margin-bottom: 24px; */
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


Widget.Button = styled.div`
        margin-top: 9px;

        width: 286px;
        height: 40px;
        justify-content: center;
        align-content: center;
        background:linear-gradient(#10101C,#000028, #36207e, #4d14ff);
        border-radius: 5px ;
        border: 0;
        color: #fff;

        font-weight: bold;
        transition: background-color 0.2s;
        &:hover {
          background: ${shade(0.2, '#ff8998')};
        }
      h4 {
        line-height: 36px;
        margin-left: 16px;
      }

`;

export default Widget;
