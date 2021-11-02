export declare const EffectsControl: {
    perspective: (settings: {
        perspective: string;
        axis: string;
        scale: string;
    }, values: {
        tiltY: string;
        tiltX: string;
    }) => string;
    movement: (settings: {
        axis: string;
        scale: string;
    }, values: {
        tiltY: string;
        tiltX: string;
    }) => string;
};
