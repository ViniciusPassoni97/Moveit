import { useState, useEffect, useContext} from 'react';
import { CountDownContext } from '../../contexts/CountdownContext';
import styles from '../../styles/components/Countdown.module.css';


export function Countdown(){
    const { 
        minutes,
        seconds,
        hasFinished,
        active,
        handleTime,
        handleReset
    } = useContext(CountDownContext);

    const [minuteLeft, minuteRight] = String(minutes).padStart(2,'0').split('');
    const [secondLeft, secondsRight] = String(seconds).padStart(2,'0').split('');
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