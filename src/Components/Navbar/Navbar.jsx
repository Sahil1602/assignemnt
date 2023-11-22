import React, { useEffect, useState } from 'react'
import styles from './../../styles/navbar.module.css'

function Navbar() {
  const ws = new WebSocket('wss://socketsbay.com/wss/v2/1/demo/')
  // wss://socketsbay.com/wss/v2/1/demo/
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    ws.onopen = () => setIsConnected(true)
    ws.onclose = () => setIsConnected(false)
    return () => ws.close()
  }, [])

  return (
    <div className={styles.navbarWrapper}>
        <div className={styles.navLink1}>Assignment</div>
        <div className={styles.navLink2}>{isConnected ? 'Connected': 'Disconnected'}</div>
    </div>
  )
}

export default Navbar