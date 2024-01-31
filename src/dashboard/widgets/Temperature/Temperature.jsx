import { useState } from 'react'
import styles from './Temperature.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBell, faHome, faLaptop, faSignOut} from '@fortawesome/free-solid-svg-icons'

function Temperature({data}) {


  return (
    <div className={styles.temperature}>

      <div className={styles.temperature__item}>
        <div className={styles.temperature__item__label}>Temperature Inside:</div>
        <div className={styles.temperature__item__data}>
          <div className={styles.temperature__item__data__value}>36</div>
          <div className={styles.temperature__item__data__type}>°C</div>
        </div>
      </div>

        <div className={styles.temperature__item}>
            <div className={styles.temperature__item__label}>Temperature Outside:</div>
            <div className={styles.temperature__item__data}>
                <div className={styles.temperature__item__data__value}>26</div>
                <div className={styles.temperature__item__data__type}>°C</div>
            </div>
        </div>

        <div className={styles.temperature__item}>
            <div className={styles.temperature__item__label}>Humidity:</div>
            <div className={styles.temperature__item__data}>
                <div className={styles.temperature__item__data__value}>64</div>
                <div className={styles.temperature__item__data__type}>%</div>
            </div>
        </div>

    </div>
  )
}

export default Temperature
