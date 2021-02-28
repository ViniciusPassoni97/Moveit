import { ExpirienceBar } from "../components/expirienceBar/ExpirienceBar";
import {Profile} from '../components/profile/Profile';
import {CompletedChallenges} from '../components/completedChallenges/CompletedChallenges';
import styles from '../styles/pages/Home.module.css';
import {Countdown} from '../components/countdown/countdown';
import {ChallengeBox} from '../components/challenge/ChallengeBox';
import Head from 'next/head';
import { CountdownProvider } from "../contexts/CountdownContext";
import {GetServerSideProps} from 'next';
import {ChallengesProvieder} from '../contexts/ChallengeContext';

interface HomeProps{
    level:number;
    currentExpirience:number;
    challengeCompleted:number;
}

export default function Home(props:HomeProps) {
  console.log(props);
  return (
    <ChallengesProvieder 
      level={props.level}
      currentExpirience={props.currentExpirience}
      challengeCompleted={props.challengeCompleted}
    >
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
          
    </ChallengesProvieder>
  )
}

export const getServerSideProps:GetServerSideProps = async (ctx) => {
  const {level,currentExpirience,challengeCompleted} = ctx.req.cookies;
  
  return{
      props:{
        level:Number(level),
        currentExpirience:Number(currentExpirience),
        challengeCompleted:Number(challengeCompleted)
      }
    }
}