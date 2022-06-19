import React from 'react'
import styles from './HorizontalContainer.module.scss'
function HorizontalContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.horizontalContainer}>
      <div className={styles.horizontalContainerItems}>{children}</div>
    </div>
  )
}

export default HorizontalContainer
