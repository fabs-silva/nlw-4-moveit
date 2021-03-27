import styles from '../styles/components/Profile.module.css';
import { useContext } from 'react';
import { ChallengesContext } from './../contexts/ChallengesContext';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="http://github.com/fabs-silva.png" alt="Imagem de Perfil do Github" />
      <div>
        <strong>Fabiana Silva</strong>
        <p>
          <img src="icons/level.svg" alt="Ícone do nível" />
          Level {level}
        </p>
      </div>
    </div>
  )
}