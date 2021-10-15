import { ReactElement } from 'react'
import IChasingElement from './IChasingElement'

export default interface IMouseContainer {
    chasingElement: ReactElement<IChasingElement>,
    styles?: object,
    options?: object,
    ref?: string
}