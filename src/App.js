import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

// import React from 'react';
// import './App.css';
// import Main from './containers/Main';
// import { ThemeProvider } from 'styled-components';
// import { chosenTheme } from './theme';
// import { GlobalStyles } from './global';

// function App() {
//   return (
//     <ThemeProvider theme={chosenTheme}>
//       <>
//         <GlobalStyles />
//         <div>
//           <Main theme={chosenTheme} />
//         </div>
//       </>
//     </ThemeProvider>
//   );
// }

// export default App;
