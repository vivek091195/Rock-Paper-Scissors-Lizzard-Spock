import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Barlow Semi Condensed', sans-serif;
    }
    body {
        height: 100vh;
        width: 100%;
        background: radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%));
    }
`;

const AppWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  padding: 2rem;
`;

export { GlobalStyle, AppWrapper };
