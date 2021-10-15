import React from 'react'
import IChasingElement from '../../interfaces/IChasingElement'

const ChasingElement: React.FC<IChasingElement> = ({styles, children}) => {
    return (
        <div style={styles}>
            {children}
        </div>
    )
}

export default ChasingElement