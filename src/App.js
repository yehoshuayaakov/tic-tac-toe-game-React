import Header from './Components/Layout/Header';
import './App.css';
import Board from './Components/Layout/Board';
import Box from './Components/Box';

function App() {
  return ( 
    <>
    
    <div className='App'>
      <Header />
      <div className='board'>
        <Board />
        
      </div>
      
    </div>
</>
  );
}

export default App;
