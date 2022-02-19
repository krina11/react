import logo from './logo.svg';
import './App.css';
import './App.scss';
import Header from './components/Header/Header'
import Container from './components/Container/Container';
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p className="app-text">
    //       Edit here <code className="app-text-2">src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div  className="App">
      <Header></Header>
      <Container/>
    </div>
  );
}

export default App;
