import logo from './logo.svg';
import './App.css';
import './App.scss';
import Header from './components/Header/Header'
import Container from './components/Container/Container';
function App() {
  return (
    <div  className="App">
      <Header></Header>
      <Container/>
    </div>
  );
}

export default App;
