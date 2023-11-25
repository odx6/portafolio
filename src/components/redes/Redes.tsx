import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/github.svg'
import styles from './redes.module.css'

const Redes = () => {
    return (
        <article className={styles.redes}>
            <a target='_blank' className={`${styles.linkedin} hover:animate-pulse animate-once`} href="https://www.linkedin.com/in/ever-ac-64077a28b/"><img src={linkedin} alt="logo de linkedin" /></a>
            <a target='_blank' className={`${styles.github} hover:animate-pulse animate-once`} href="https://github.com/odx6"><img src={github} alt="logo de github" /></a>
           
        </article>
    )
}

export default Redes;