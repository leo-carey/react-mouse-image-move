import React, { ReactElement } from 'react'
import {IChasingElement} from '../ChasingElement'

interface IMouseContainer {
    chasingElement: ReactElement<IChasingElement>,
    styles?: object
}

const MouseContainer: React.FC<IMouseContainer> = ({chasingElement, styles}) => {
    const defaultSettings = {
        reverse: false,
        max: 35,
        perspective: 1000,
        easing: 'cubic-bezier(.03,.98,.52,.99)',
        scale: '1.1',
        speed: '1000',
        transition: true,
        axis: null,
        reset: true
    }

    return (
        <div style={styles}>
            {chasingElement}
        </div>
    )
}

export default MouseContainer