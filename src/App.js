import './App.css';
import {JogoDoGalo} from "./components/JogoDoGalo"
import { useJogoDoGalo } from './hooks/useJogoDoGalo';



function App() {

  const {jogo} = useJogoDoGalo()


console.log()

  return (
    <div className="container">
      <h1>Jogo do Galo</h1>
      <p>A jogar: {jogo.jogadorAtual} </p>
      <div className="App">
      <JogoDoGalo />
    </div>
    </div>
    
  );
}

export default App;
