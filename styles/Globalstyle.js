import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /*  */
  /* Default Tag */
  /*  */
  :root{
    --color-black: #0D1017;
    --color-red: #af0808;
    --color-white: #FFFFFF;
    --color-blue-maroon: #06141e;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-size: 16px;
    font-family: Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-weight: 300;
  }

  body {
    background-color: var(--color-blue-maroon);
    color: white;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    padding: 0;
    margin: 0;
  }

  section {
    /* margin-top: 0.75rem; */
    /* margin-bottom: 0.75rem; */
    padding: 2.25rem 5rem;

    @media (max-width: 992px) {
      padding: 1.5rem 2.25rem;
    }

    @media (max-width: 768px) {
      padding: 1rem 1.75rem;
    }
  }

  li {
    list-style: none;
  }

  /*  */
  /* Class Related */
  /*  */
  .container {
    padding: 0 2rem;
    margin-left: auto;
    margin-right: auto;
    
    @media (max-width: 576px) {
      max-width: 100%;
    }

    @media (min-width: 576px) {
      max-width: 540px;
    }

    @media (max-width: 768px) {
      padding: 0 0.45rem;
    }

    @media (min-width: 768px) {
      max-width: 720px;
    }

    @media (min-width: 992px) {
      max-width: 960px;
    }

    @media (min-width: 1200px) {
      max-width: 1320px;
    }

    @media (min-width: 1400px) {
      max-width: 1320px;
    }
  }

  .title {
    font-weight: bold;
    font-size: 2.35rem;
    margin-bottom: 2rem;
    text-transform: uppercase;
  }

  .main-bg {
    background-color: var(--color-blue-maroon);
  }

  .text-maroon-red {
    color: var(--color-red);
  }

  .text-white {
    color: var(--color-white)
  }

  .text-danger {
    color: red;
  }

  .text-right {
    text-align: right;
  }

  .font-weight-bold {
    font-weight: bold;
  }

  .cursor-pointer {
    cursor: pointer;
  }

  .font-digital {
    font-family: 'Orbitron', sans-serif;
  }

  /*  */
  /* Animation */
  /*  */

  .blinking {
    @keyframes blinkingAnimation {
      0% {opacity: 1}
      50% {opacity: 0}
      100% {opacity: 1}
    }

    animation-name: blinkingAnimation;
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-fill-mode: backwards;
  }
`;

export default GlobalStyle;
