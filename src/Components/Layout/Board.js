import { useEffect, useState } from 'react';
import Box from '../Box';

import styles from './Board.module.css'
import { winningPatterns } from '../../winningPatterns';
const Board = () => {
    const [boxes, setBoxes] = useState(Array(9).fill(null));
    console.log(boxes);
    const [xTurn, setXTurn] = useState(true);
    const [isWinner, setIsWinner] = useState(false);
    const [winner, setWinner] = useState('');
    const [winningCombo, setWinningCombo] = useState([]);
    const checkForWinner = () =>{
        boxes.forEach(value=>{
                for (const pattern of winningPatterns){
                    if (boxes[pattern[0]] != null || boxes[pattern[1]] != null || boxes[pattern[2]] != null){
                        // console.log(pattern)
                    if (boxes[pattern[0]] == boxes[pattern[1]] && boxes[pattern[1]] == boxes[pattern[2]]){
                        setIsWinner(true);
                        setWinner(value);
                        const winningPattern = pattern;
                        setWinningCombo(winningPattern);
                        console.log(winningCombo);
                    }
                 }
            }
         })
    }
const resetGame = () =>{
    setBoxes(Array(9).fill(null));
    setXTurn(true);
    setIsWinner(false);
    setWinner('');
    setWinningCombo([]);
    
}
    useEffect(()=>{
        checkForWinner();
        console.log(isWinner);

    },[xTurn])

    return (
        <>
            <div className={styles.container}>
                {boxes.every(value => value === null) ? <h1>X Goes first</h1>:
                     !xTurn ? <h1>O's Turn</h1> :
                        <h1>X's Turn</h1>
                    }

                <div className={styles.board}>
                    {boxes.map((box, i) => (
                        <div key={i}>
                            <Box key={i}
                                index={i}
                                value={box}
                                boxes={boxes}
                                setBoxes={setBoxes}
                                setXTurn={setXTurn}
                                xTurn={xTurn} 
                                isWinner={isWinner}
                                winningCombo={winningCombo}/>
                        </div>
                    )

                    )}
                </div>
                {isWinner && <div><h1>{winner} is WINNER!!!</h1> 
                    <span className={styles.playAgain} onClick={resetGame}>Play Again?</span>
                    </div>}
                {boxes.every(value=>value !== null) && !winner && <div><h1>StaleMate!</h1>
                <span className={styles.playAgain} onClick={resetGame}>Play Again?</span></div>}
            </div>
        </>
    )
}
export default Board;