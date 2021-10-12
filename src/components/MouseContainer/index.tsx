import React from 'react'
// import {IChasingElement} from '../ChasingElement'

interface IMouseContainer {
    chasingElement: any,//React.FC<IChasingElement>,
    styles?: object
}

const MouseContainer: React.FC<IMouseContainer> = ({chasingElement, styles}) => {
    return (
        <div style={styles}>
            {chasingElement}
        </div>
    )
}

export default MouseContainer