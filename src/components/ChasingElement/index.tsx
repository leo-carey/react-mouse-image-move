import React from 'react'

export interface IChasingElement {
    chasingComponent?: any,//React.FC,
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