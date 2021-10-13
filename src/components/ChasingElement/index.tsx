import React, { ReactElement } from 'react'

export interface IChasingElement {
    chasingComponent?: ReactElement,
    styles?: object
}

const ChasingElement: React.FC<IChasingElement> = ({chasingComponent, styles, children}) => {
    return (
        <div style={styles}>
            {chasingComponent && children}
        </div>
    )
}

export default ChasingElement