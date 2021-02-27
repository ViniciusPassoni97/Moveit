import '../styles/global.css';
import {ChallengeContext, ChallengesProvieder} from '../contexts/ChallengeContext';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [level,setLevel] = useState(1);

  function levelUp(){
    setLevel(level+1);
  }
  return(
    <ChallengesProvieder>
      <Component {...pageProps} />
    </ChallengesProvieder>
  )
}

export default MyApp
