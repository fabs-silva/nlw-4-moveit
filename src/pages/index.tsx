import Head from 'next/head';
import styles from '../styles/pages/Home.module.css';

import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ChallengeBox } from '../components/ChallengeBox';

import { ChallengesProvider } from '../contexts/ChallengesContext';

export default function Home() {
  return (
    <ChallengesProvider>
      <div className={styles.container}>
        <Head>
          <title>MoveIt! - NLW #4</title>
        </Head>
        <ExperienceBar />
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
      </div>
    </ChallengesProvider>
  )
}
