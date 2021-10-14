import React from 'react'
import IChasingElement from '../../interfaces/IChasingElement'


const ChasingElement: React.FC<IChasingElement> = ({chasingComponent, styles, children}) => {
    return (
        <div style={styles}>
            {chasingComponent && children}
        </div>
    )
}

export default ChasingElement