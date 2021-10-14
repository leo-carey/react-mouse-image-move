import React, { useState, useRef, useEffect } from 'react'
import IElementProperties from '../../interfaces/IElementProperties'
import IMouseContainer from '../../interfaces/IMouseContainer'

const MouseContainer: React.FC<IMouseContainer> = ({chasingElement, styles, options}) => {
    const currentElement = useRef(null)
    const [style, setStyle] = useState(styles)
    
    const defaultSettings = {
        reverse: false,
        max: 35,
        perspective: 1000,
        easing: 'cubic-bezier(.03,.98,.52,.99)',
        scale: '1.1',
        speed: 1000,
        transition: true,
        axis: null,
        reset: true
    }

    const settings = {
        ...defaultSettings,
        ...options,
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const elementProperties: IElementProperties = {
        width: 0,
        height: 0,
        left: 0,
        top: 0,
        transitionTimeout: null,
        updateCall: 0,
        reverse: settings.reverse ? -1 : 1
    }

    useEffect(() => {}, [])
    
    useEffect(() => {
        return () => {
            elementProperties.transitionTimeout && clearTimeout(elementProperties.transitionTimeout)
            cancelAnimationFrame(elementProperties.updateCall)
        }
    }, [elementProperties])

    const updateElementPosition = (element: any) => {
        const rect = element.currentTarget.getBoundingClientRect()
        elementProperties.width = element.currentTarget.offsetWidth
        elementProperties.height = element.currentTarget.offsetHeight
        elementProperties.left = rect.left
        elementProperties.top = rect.top
    }

    const setTransition = () => {
        elementProperties.transitionTimeout && clearTimeout(elementProperties.transitionTimeout)

        setStyle({
            ...style,
            transition: `${settings.speed}ms ${settings.easing}`
        })

        elementProperties.transitionTimeout = setTimeout(() => {
            setStyle({
                ...style,
                transition: ''
            })
        }, settings.speed)
    }

    const getValues = (e: any) => {
        const x = (e.nativeEvent.clientX - elementProperties.left) / elementProperties.width
        const y = (e.nativeEvent.clientY - elementProperties.top) / elementProperties.height
        const _x = Math.min(Math.max(x, 0), 1)
        const _y = Math.min(Math.max(y, 0), 1)
        const tiltX = (elementProperties.reverse * (settings.max / 2 - _x * settings.max)).toFixed(2)
        const tiltY = (elementProperties.reverse * (_y * settings.max -   settings.max / 2)).toFixed(2)
        const percentageX = _x * 100
        const percentageY = _y * 100

        return {
            tiltX,
            tiltY,
            percentageX,
            percentageY
        }
    }

    const update = (e: any) => {
        const values = getValues(e)

        setStyle({
            ...style,
            transform: `perspective(${settings.perspective}px) rotateX(${settings.axis === 'x' ? 0 : values.tiltY}deg) rotateY(${settings.axis === 'y' ? 0 : values.tiltX}deg) scale3d(${settings.scale}, ${settings.scale}, ${settings.scale})`
        })

        elementProperties.updateCall = null
    }

    const reset = () => {
        window.requestAnimationFrame(() => {
            setStyle({
                ...style,
                transform: `perspective(${settings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`
            })
        })
    }

    const handleMouseEnter = (e: any) => {
        updateElementPosition(e)
        setTransition()
    }

    const handleMouseMove = (e: any) => {
        e.persist()

        if(elementProperties.updateCall !== null) {
            window.cancelAnimationFrame(elementProperties.updateCall)
        }

        elementProperties.updateCall = requestAnimationFrame(update.bind(currentElement, e))
    }

    const handleMouseLeave = (e: any) => {
        setTransition()

        if (settings.reset) {
            reset()
        }
    }

    return (
        <div
            ref={currentElement}
            style={style}
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            { chasingElement }
        </div>
    )
}

export default MouseContainer