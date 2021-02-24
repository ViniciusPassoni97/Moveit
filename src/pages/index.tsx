import { ExpirienceBar } from "../components/expirienceBar/ExpirienceBar";
import {Profile} from '../components/profile/Profile';
import {CompletedChallenges} from '../components/completedChallenges/CompletedChallenges';
import styles from '../styles/pages/Home.module.css';
import {Countdown} from '../components/countdown/countdown';

export default function Home() {
  return (
    <div className={styles.container}>
      <ExpirienceBar />
      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>
          
        </div>
      </section>
    </div>
  )
}