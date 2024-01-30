import { useState } from 'react'
import styles from './Header.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFile, faHdd, faHome} from '@fortawesome/free-solid-svg-icons'

function Header() {


  return (
    <div>

        <div className={styles.logo}>
            <div className={styles.logo__name}>TUKE</div>
            <div className={styles.logo_additional}>Solaris | B526</div>
        </div>

        <div className={styles.menu}>
            <div className={styles.menu__item}>
                <div className={styles.menu__item__icon}><FontAwesomeIcon icon={faFile}/></div>
                <div className={styles.menu__item__name}>Home</div>
            </div>
        </div>

        <div></div>

    </div>
  )
}

export default Header
