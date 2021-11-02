declare global {
  namespace JSX {
    export interface IntrinsicElements {
      item: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>>;
    }
  }

  export interface IChasingElement {
    styles?: object;
  }

  export interface IElementChildProperties {
    width: number;
    height: number;
    left: number;
    top: number;
    transitionTimeout: ReturnType<typeof setTimeout> | null;
    updateCall: any;
  }

  export interface IMouseContainer {
    chasingElement: ReactElement<IChasingElement>;
    styles?: object;
    options?: object;
    ref?: string;
  }
}
