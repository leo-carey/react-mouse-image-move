import { ReactElement } from 'react';
import ChasingElementInterface from './ChasingElementInterface';
export default interface MouseContainerInterface {
    chasingElement: ReactElement<ChasingElementInterface>;
    styles?: object;
    options?: object;
    ref?: string;
}
