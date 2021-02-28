import '../styles/global.css';
import {ChallengesProvieder} from '../contexts/ChallengeContext';

function MyApp({ Component, pageProps }) {
  return(
    <ChallengesProvieder>
        <Component {...pageProps} />
      
    </ChallengesProvieder>
  )
}

export default MyApp
