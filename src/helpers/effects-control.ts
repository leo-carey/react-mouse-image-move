export const EffectsControl = {
  perspective: (
    settings: {
          perspective: string;
          axis: string;
          scale: string;
    },
    values: {
        tiltY: string;
        tiltX: string;
    }): string => (
        `
        perspective(${settings.perspective}px)
        rotateX(${settings.axis === 'x' ? 0 : values.tiltY}deg)
        rotateY(${settings.axis === 'y' ? 0 : values.tiltX}deg)
        scale3d(${settings.scale}, ${settings.scale}, ${settings.scale})
        `
  ),
  movement: (
    settings: {
          axis: string;
          scale: string;
    },
    values: {
        tiltY: string;
        tiltX: string;
    }): string => (
        `
        translateX(${settings.axis === 'x' ? 0 : (parseFloat(values.tiltY) * 2.8)}px)
        translateY(${settings.axis === 'y' ? 0 : (parseFloat(values.tiltX) * 2.8)}px)
        `
  )
}
