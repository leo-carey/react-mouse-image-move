import React, { useState, useRef, useEffect } from 'react'
import ChasingElement from '../ChasingElement'
import IElementChildProperties from '../../interfaces/IElementChildProperties'
import IMouseContainer from '../../interfaces/IMouseContainer'

const MouseContainer: React.FC<IMouseContainer> = ({chasingElement, styles, options}) => {
    const wrapperElement = useRef(null)

    const initElementChildProperties: IElementChildProperties = {
        width: 0,
        height: 0,
        left: 0,
        top: 0,
        transitionTimeout: null,
        updateCall: 0
    }

    const [style, setStyle] = useState(chasingElement.props.styles)
    const [elementChildProperties, setElementChildProperties] = useState(initElementChildProperties)
    
    const defaultSettings = {
        max: 30,
        perspective: 1000,
        easing: 'cubic-bezier(.03,.98,.52,.99)',
        scale: 1.1,
        speed: 1000,
        axis: null,
        reset: true
    }

    const settings = {
        ...defaultSettings,
        ...options,
    }

    useEffect(() => {}, [])
    
    useEffect(() => {
        return () => {
            elementChildProperties.transitionTimeout && clearTimeout(elementChildProperties.transitionTimeout)
            cancelAnimationFrame(elementChildProperties.updateCall)
        }
    }, [elementChildProperties])

    const updateChildPosition = (element: any) => {
        const rect = element.currentTarget.getBoundingClientRect()

        setElementChildProperties({
            ...elementChildProperties,
            width: element.currentTarget.offsetWidth,
            height: element.currentTarget.offsetHeight,
            left: rect.left,
            top: rect.top
        })
    }

    const setTransition = () => {
        setStyle({
            ...style,
            transition: `${settings.speed}ms ${settings.easing}`
        })
    }

    const getValues = (e: any) => {
        const x = (e.nativeEvent.clientX - elementChildProperties.left) / elementChildProperties.width
        const y = (e.nativeEvent.clientY - elementChildProperties.top) / elementChildProperties.height
        const _x = Math.min(Math.max(x, 0), 1)
        const _y = Math.min(Math.max(y, 0), 1)
        const tiltX = (settings.max / 2 - _x * settings.max).toFixed(2)
        const tiltY = (_y * settings.max -   settings.max / 2).toFixed(2)
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
        let values = getValues(e)

        setStyle({
            ...style,
            transform: `
                perspective(${settings.perspective}px)
                rotateX(${settings.axis === 'x' ? 0 : values.tiltY}deg)
                rotateY(${settings.axis === 'y' ? 0 : values.tiltX}deg)
                scale3d(${settings.scale}, ${settings.scale}, ${settings.scale})`
        })

        elementChildProperties.updateCall = null
    }

    const reset = () => {
        window.requestAnimationFrame(() => {
            setStyle({
                ...style,
                transform: `
                    perspective(1000px)
                    rotateX(0deg)
                    rotateY(0deg)
                    scale3d(1, 1, 1)
                `
            })
        })
    }

    const handleMouseEnter = (e: any) => {
        updateChildPosition(e)
        setTransition()
    }

    const handleMouseMove = (e: any) => {
        e.persist()

        if(elementChildProperties.updateCall !== null) {
            cancelAnimationFrame(elementChildProperties.updateCall)
        }

        elementChildProperties.updateCall = requestAnimationFrame(update.bind(wrapperElement, e))
    }

    const handleMouseLeave = (e: any) => {
        setTransition()

        if (settings.reset) {
            reset()
        }
    }

    return (
        <div
            ref={wrapperElement}
            style={styles}
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <ChasingElement styles={style}>
                {chasingElement.props.children}
            </ChasingElement>
        </div>
    )
}

export default MouseContainer
