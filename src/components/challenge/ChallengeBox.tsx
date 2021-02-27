import styles from '../../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
    return(
        <div className={styles.challengeBoxContainer}>
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
        </div>
    )
}