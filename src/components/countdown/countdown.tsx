import { useState, useEffect} from 'react';
import styles from '../../styles/components/Countdown.module.css';

let countdownTimeOut : NodeJS.Timeout;

export function Countdown(){
    const [time,setTime] = useState(0.1*60);
    const [active, setActive] = useState(false);
    const [ hasFinished, setHasFinished ]= useState(false);
    
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2,'0').split('');
    const [secondLeft, secondsRight] = String(seconds).padStart(2,'0').split('');

    function handleTime(){
        setActive(true);
    }

    
    function handleReset(){
        clearTimeout(countdownTimeOut);
        setActive(false);
        setTime(0.1*60);
    }

    useEffect(()=>{
        if(active && time > 0){
            countdownTimeOut = setTimeout(()=>{
                setTime(time-1);
            },1000)
        }else if(active && time===0) {
            setHasFinished(true);
            setActive(false);
        }
    },[active,time]);

    return(
      <div>
        <div className={styles.containerCountdown}>
            <div>
                <span>{minuteLeft}</span>
                <span>{minuteRight}</span>
            </div>
            <span> : </span>
            <div>
                <span>{secondLeft}</span>
                <span>{secondsRight}</span>
            </div>
        </div>
        {hasFinished ? (
             <button
             disabled 
             onClick={handleReset} 
             className={`${styles.countdownButton}`}
             
             >
                 Você terminou !
             </button>
        ) :(
            <>
            { active ? (
                <button 
                type='button' 
                onClick={handleReset} 
                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                >
                    Parar um ciclo
                </button>
                ):(
                <button type='button' onClick={handleTime} className={styles.countdownButton}>
                    Iniciar um ciclo
                </button>
            )}
            </>
        ) }
      </div>  
    );
}