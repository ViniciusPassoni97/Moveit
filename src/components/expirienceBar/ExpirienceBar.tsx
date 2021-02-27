import { useContext } from 'react'
import { ChallengeContext } from '../../contexts/ChallengeContext'
import styles from '../../styles/components/expirienceBar.module.css'

export function ExpirienceBar() {
    const {currentExpirience, experienceToNextLevel } = useContext(ChallengeContext) 

    return(
        <header className={styles.expirienceBar}>
            <span>0 px</span>
            <div>
                <div className={styles.expirienceBarProgress}>
                    <span className={styles.currentExpirience}style={{left:'50%'}}>
                        {currentExpirience} xp
                    </span>
                </div>
            </div>
            <span>{experienceToNextLevel} px</span>
        </header>
    )
}