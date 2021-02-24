import styles from '../../styles/components/expirienceBar.module.css'

export function ExpirienceBar() {
    return(
        <header className={styles.expirienceBar}>
            <span>0 px</span>
            <div>
                <div className={styles.expirienceBarProgress}>
                    <span className={styles.currentExpirience}style={{left:'50%'}}>
                        300 xp
                    </span>
                </div>
            </div>
            <span>600 px</span>
        </header>
    )
}