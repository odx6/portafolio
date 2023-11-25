import styles from './animacionOne.module.css'

const AnimacionOne = () => {
    return (
        <div className={`${styles.Animacion} `}>
            <div className={styles.loader2}>
                <div className={styles.first}>
                    <div className={styles.second}>
                        <div className={styles.third}>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.loader}></div>
        </div>
    );
}

export default AnimacionOne;