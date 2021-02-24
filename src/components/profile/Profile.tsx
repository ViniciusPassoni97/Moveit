import styles from '../../styles/components/Profile.module.css';

export function Profile() {
    return(
        <div className={styles.profileContainer}>
            <img src='https://github.com/ViniciusPassoni97.png' alt='Image' />
            <div>
                <strong>Vinicius Passoni97</strong>
                <p>Level 1</p>
            </div>
        </div>
    );
}