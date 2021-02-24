import { ExpirienceBar } from "../components/expirienceBar/ExpirienceBar";
import {Profile} from '../components/profile/Profile';
import {CompletedChallenges} from '../components/completedChallenges/CompletedChallenges';
import styles from '../styles/pages/Home.module.css';
import {Countdown} from '../components/countdown/countdown';
import Head from 'next/head';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | move.it</title>
      </Head>
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