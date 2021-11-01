import React from 'react'
import IChasingElement from '../../interfaces/IChasingElement'

const ChasingElement: React.FC<IChasingElement> = ({styles, ...props}) => {
    return (
        <div style={styles} {...props}>
            {props.children}
        </div>
    )
}

export default ChasingElement