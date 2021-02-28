import { ExpirienceBar } from "../components/expirienceBar/ExpirienceBar";
import {Profile} from '../components/profile/Profile';
import {CompletedChallenges} from '../components/completedChallenges/CompletedChallenges';
import styles from '../styles/pages/Home.module.css';
import {Countdown} from '../components/countdown/countdown';
import {ChallengeBox} from '../components/challenge/ChallengeBox';
import Head from 'next/head';
import { CountdownProvider } from "../contexts/CountdownContext";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | move.it</title>
      </Head>
      <ExpirienceBar />
      <CountdownProvider>
      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
      </CountdownProvider>
    </div>
  )
}

export const getServerSideProps = async () => {
    return{
      props:{}
    }
}