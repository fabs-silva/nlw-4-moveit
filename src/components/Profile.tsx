import styles from '../styles/components/Profile.module.css';

export function Profile(){
  return(
    <div className={styles.profileContainer}>
      <img src="http://github.com/fabs-silva.png" alt="Imagem de Perfil do Github" />
      <div>
        <strong>Fabiana Silva</strong>
        <p>
          <img src="icons/level.svg" alt="Ícone do nível"/>
          Level 1
        </p>
      </div>
    </div>
  )
}