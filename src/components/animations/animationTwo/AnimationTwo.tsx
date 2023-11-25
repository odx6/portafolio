import styles from './animationTwo.module.css'

interface AniProps {
  lightMode: boolean;
}

const AnimationTwo: React.FC<AniProps> = ({lightMode}) => {
  return (
    <div className={styles.spinner}>
      <div className={`${styles.spinner1} ${lightMode === true ? `${styles.white}` : `${styles.dark}`} `}></div>
    </div>
  );
};

export default AnimationTwo;
