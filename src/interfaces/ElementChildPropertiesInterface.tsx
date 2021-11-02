
export default interface ElementChildPropertiesInterface {
    width: number;
    height: number;
    left: number;
    top: number;
    transitionTimeout: ReturnType<typeof setTimeout>|null;
    updateCall: any;
}
