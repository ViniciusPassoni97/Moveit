import { useContext } from 'react'
import { ChallengeContext } from '../../contexts/ChallengeContext'
import styles from '../../styles/components/expirienceBar.module.css'

export function ExpirienceBar() {
    const {currentExpirience, experienceToNextLevel } = useContext(ChallengeContext) 

    const percentToNextLevel = Math.round(currentExpirience*100)/experienceToNextLevel;
    
    return(
        <header className={styles.expirienceBar}>
            <span>0 px</span>
            <div>
                <div className={styles.expirienceBarProgress} style={{width:`${percentToNextLevel}%`}} />
                    <span className={styles.currentExpirience}style={{left:`${(percentToNextLevel-4)}%`}}>
                        {currentExpirience} xp
                    </span>
            </div>
            <span>{experienceToNextLevel} px</span>
        </header>
    )
}