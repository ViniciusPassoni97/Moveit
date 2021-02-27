
import { useContext } from 'react';
import { ChallengeContext } from '../../contexts/ChallengeContext';
import styles from '../../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
    const {activeChallenge}=useContext(ChallengeContext)

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
                    >Falhei</button>
                    
                    <button 
                    type='button'
                    className={styles.challengeButtonSuccess}
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