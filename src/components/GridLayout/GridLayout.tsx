import React from 'react'
import styles from './GridLayout.module.scss'
function GridLayout({ children }: { children: React.ReactNode }) {
  return <div className={styles.gridLayout}>{children}</div>
}

export default GridLayout
