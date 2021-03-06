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
    const [xScore, setXScore] = useState(0);
    const [oScore, setOScore] = useState(0);
    const checkForWinner = () => {
        boxes.forEach(value => {
            for (const pattern of winningPatterns) {
                // console.log(pattern)
                if (boxes[pattern[0]] === boxes[pattern[1]] && boxes[pattern[1]] === boxes[pattern[2]] && (boxes[pattern[0]] !== null)) {
                    setIsWinner(true);
                    const winningPattern = pattern;
                    setWinningCombo(winningPattern);
                    setWinner(boxes[winningPattern[0]]);
                    console.log('winner!!!!!!!', winner);

                }
            }
        })
    }
    const resetGame = () => {
        setBoxes(Array(9).fill(null));
        setXTurn(true);
        setIsWinner(false);
        setWinner('');
        setWinningCombo([]);

    }
    const clearScores = () => {
        resetGame();
        setXScore(0);
        setOScore(0);
    }
    useEffect(() => {
        checkForWinner();
        if (winner === 'X') {
            setXScore(prev => {
                return prev += 1;
            });
            console.log("useEffectWInnerX", xScore)
        }
        else if (winner === 'O') {
            setOScore(prev => {
                return prev += 1;
            });
        }
        console.log(isWinner);

    }, [xTurn, winner])

    return (
        <>
            <div className={styles.container}>
                <div className={styles.side}></div>
                {!isWinner && <div className={styles.topMessage}>
                    {boxes.every(value => value === null) ? <h1>X Goes first</h1> :
                        !xTurn ? <h1>O's Turn</h1> :
                            <h1>X's Turn</h1>
                    }
                </div>}
                {isWinner && <h1 className={styles.topMessage}>Game Over!</h1>}
                <div className={styles.contentContainer}>

                    <div className={`${styles.scoreAreaX} ${isWinner && winner === 'X' && styles.addScore}`}>
                        <h2>X Score</h2>
                        <div><h1>{xScore}</h1></div>
                    </div>
                    <div className={styles.board}>
                        {boxes.map((box, i) => (
                            <div key={i}>
                                <Box
                                    index={i}
                                    value={box}
                                    boxes={boxes}
                                    setBoxes={setBoxes}
                                    setXTurn={setXTurn}
                                    xTurn={xTurn}
                                    isWinner={isWinner}
                                    winningCombo={winningCombo} />
                            </div>
                        )

                        )}
                    </div>
                    <div className={`${styles.scoreAreaO} ${isWinner && winner === 'O' && styles.addScore}`}>
                        <h2>O Score</h2>
                        <div><h1>{oScore}</h1></div>
                    </div>

                </div>
                {isWinner && <div><h1>{winner} is the WINNER!!!</h1>
                    <span className={styles.playAgain} onClick={resetGame}>Play Again?</span>
                    <span className={styles.clearScores} onClick={clearScores}>Clear Scores</span>
                    <div style={{height:'20px'}}></div>
                </div>}
                {boxes.every(value => value !== null) && !winner && <div><h1>StaleMate!</h1>
                    <span className={styles.playAgain} onClick={resetGame}>Play Again?</span>
                   </div>}
            </div>
        </>
    )
}
export default Board;