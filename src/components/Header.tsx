import styles from './Header.module.css'

import rocketLogo from '../assets/rocketLogo.svg'

export function Header() {
    return(
        <header className={styles.header}>
            <img src={rocketLogo} alt="Logo da Aplicação" />
            <h1>
                <span className={styles.logoInit}>to</span>
                <span className={styles.logoEnd}>do</span>
            </h1>
        </header>
    )
}