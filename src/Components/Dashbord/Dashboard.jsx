import React from 'react'
import Controls from '../SubComponents/Controls'
import Companies from './Companies'
import MarketCapGraph from './MarketCapGraph'
import styles from './../../styles/dashboard.module.css'

function Dashboard() {

    return (
        <div className={styles.mainWrapper}>
            <Companies />
            <div>
                <div className={styles.graphWrapper}>
                    <MarketCapGraph />
                </div>
                <div className={styles.controllerWrapper}>
                    <Controls />
                </div>
            </div>
        </div>
    )
}

export default Dashboard