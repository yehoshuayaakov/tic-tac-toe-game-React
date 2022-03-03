import { useEffect, useState } from 'react';
import styles from './Box.module.css'

const Box = (props)=>{
    const [winningBox, setWinningBox] = useState(false);
    useEffect(()=>{
        // console.log('check!!!!!', props.isWinner)
        
        if(props.isWinner){
            console.log('winner')
            for (const index in props.winningCombo){
                // console.log(index)
                if (props.index === props.winningCombo[index]){
                    setWinningBox(true);
                }
            }
        }
        else setWinningBox(false)
    },[props.isWinner])
    const handleClick=(index)=>{
        if(props.xTurn){
            const newBoxes = [...props.boxes];
            newBoxes[index] = 'X';
            props.setBoxes(newBoxes);
            console.log(props.boxes[index])
        }
        else {
            const newBoxes = [...props.boxes];
            newBoxes[index] = 'O';
            props.setBoxes(newBoxes);
            console.log(props.boxes[index])
        }  
        props.setXTurn(!props.xTurn);      
    }
    return(
    <button className={winningBox ? styles.winningBox : styles.button} disabled={props.value!=null} onClick={()=>{handleClick(props.index)}}>
        <div className={styles.XorO}>{props.value}
            </div>
    </button>
    )}
export default Box;