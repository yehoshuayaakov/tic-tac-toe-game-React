import Header from './Components/Layout/Header';
import './App.css';
import Board from './Components/Layout/Board';

function App() {
  return (
    <>
      <div className='App'>
        <div className='header'>
           <Header/>
        </div>
       <div className='side'></div>
        <div className='board'>
          <Board/>
        </div>
        <div className='side'></div>
      </div>
    </>
  );
}

export default App;
