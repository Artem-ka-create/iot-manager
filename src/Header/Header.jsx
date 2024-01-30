import { useState } from 'react'
import styles from './Header.module.css';

function Header() {


  return (
    <div>

        <div className={styles.logo}>
            <div className={styles.logo__name}></div>
            <div className={styles.logo_additional}></div>
        </div>

        <div></div>

        <div></div>

    </div>
  )
}

export default Header
