
import { useContext } from 'react';
import { ChallengeContext } from '../../contexts/ChallengeContext';
import { CountDownContext } from '../../contexts/CountdownContext';
import styles from '../../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
    const {resetChallenge,activeChallenge,completedChallenges}=useContext(ChallengeContext)
    const { handleReset }=useContext(CountDownContext)

    function handleChanllangeSucceeded(){
        completedChallenges();
        handleReset();
    }

    function handleChanllangeFail(){
        resetChallenge();
        handleReset();
    }
    return(
        <div className={styles.challengeBoxContainer}>
        { activeChallenge ? (
            <div className={styles.challengeBoxActive}>
                <header>Ganhe {activeChallenge.amount} xp</header>
                <main>
                    <img src='icons/body.svg'/>
                    <strong>Novo desafio</strong>
                    <p>{activeChallenge.description}</p>
                </main>
                <footer>
                    <button 
                    type='button'
                    className={styles.challengeButtonFail}
                    onClick={handleChanllangeFail}
                    >Falhei</button>
                    
                    <button 
                    type='button'
                    className={styles.challengeButtonSuccess}
                    onClick={handleChanllangeSucceeded}
                    >Completei</button>
                </footer>
            </div>
        ):(
            <div className={styles.challengeBoxNotActive}>
                <strong className={styles.challengeBoxContainerTitle}>
                    Finalize um ciclo para receber desafios
                </strong>
                <div>
                    <img className={styles.challengeBoxContainerImg} 
                    src='icons/level-up.svg' 
                    alt='' />
                </div>
                    <p className={styles.challengeBoxContainerText}>
                    Avance de level competando 
                    os desafios
                    </p>
            </div>
        )}
      </div>
    )
}