import { useState } from 'react'
import styles from './Dashboard.module.css';
import Temperature from "../widgets/Temperature/Temperature.jsx";

function Dashboard({onPayload, data}) {




  return (
    <div>
      <div className={styles.dashboard__title}>Statistic</div>

        <div className={styles.dashboard__content}>

            <Temperature data={data["temperature"]}/>

        </div>


    </div>
  )
}

export default Dashboard
