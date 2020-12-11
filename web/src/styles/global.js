import { createGlobalStyle } from 'styled-components';

// import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus {
    outline: 0;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    -webkit-font-smoothing: antialiased;
  }
  body, input , button, textarea {
    font: 16px 'Roboto Slab', sans-serif;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
    font-weight: 500;
  }

  h1, h2 , h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  
`;
