import React from 'react'
import ChasingElementInterface from '../../interfaces/ChasingElementInterface'

const ChasingElement: React.FC<ChasingElementInterface> = ({ styles, ...props }) => {
  return (
    <div style={styles} {...props}>
      {props.children}
    </div>
  )
}

export default ChasingElement
