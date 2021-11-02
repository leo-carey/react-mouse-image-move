import React, { useRef, useState, useEffect } from 'react';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _excluded = ["styles"];

var ChasingElement = function ChasingElement(_ref) {
  var styles = _ref.styles,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return React.createElement("div", Object.assign({
    style: styles
  }, props), props.children);
};

var _excluded$1 = ["chasingElement", "styles", "options"];

var MouseContainer = function MouseContainer(_ref) {
  var chasingElement = _ref.chasingElement,
      styles = _ref.styles,
      options = _ref.options,
      props = _objectWithoutPropertiesLoose(_ref, _excluded$1);

  var wrapperElement = useRef(null);
  var initElementChildProperties = {
    width: 0,
    height: 0,
    left: 0,
    top: 0,
    transitionTimeout: null,
    updateCall: 0
  };
  var defaultStyles = {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  var _useState = useState(chasingElement.props.styles),
      style = _useState[0],
      setStyle = _useState[1];

  var _useState2 = useState(initElementChildProperties),
      elementChildProperties = _useState2[0],
      setElementChildProperties = _useState2[1];

  var defaultSettings = {
    max: 30,
    perspective: 1000,
    easing: 'cubic-bezier(.03,.98,.52,.99)',
    scale: 1.1,
    speed: 1000,
    axis: null,
    reset: true
  };

  var settings = _extends({}, defaultSettings, options);

  useEffect(function () {}, []);
  useEffect(function () {
    return function () {
      elementChildProperties.transitionTimeout && clearTimeout(elementChildProperties.transitionTimeout);
      cancelAnimationFrame(elementChildProperties.updateCall);
    };
  }, [elementChildProperties]);

  var updateChildPosition = function updateChildPosition(element) {
    var rect = element.currentTarget.getBoundingClientRect();
    setElementChildProperties(_extends({}, elementChildProperties, {
      width: element.currentTarget.offsetWidth,
      height: element.currentTarget.offsetHeight,
      left: rect.left,
      top: rect.top
    }));
  };

  var setTransition = function setTransition() {
    setStyle(_extends({}, style, {
      transition: settings.speed + "ms " + settings.easing
    }));
  };

  var getValues = function getValues(e) {
    var x = (e.nativeEvent.clientX - elementChildProperties.left) / elementChildProperties.width;
    var y = (e.nativeEvent.clientY - elementChildProperties.top) / elementChildProperties.height;

    var _x = Math.min(Math.max(x, 0), 1);

    var _y = Math.min(Math.max(y, 0), 1);

    var tiltX = (settings.max / 2 - _x * settings.max).toFixed(2);

    var tiltY = (_y * settings.max - settings.max / 2).toFixed(2);
    var percentageX = _x * 100;
    var percentageY = _y * 100;
    return {
      tiltX: tiltX,
      tiltY: tiltY,
      percentageX: percentageX,
      percentageY: percentageY
    };
  };

  var update = function update(e) {
    var values = getValues(e);
    setStyle(_extends({}, style, {
      transform: "\n                perspective(" + settings.perspective + "px)\n                rotateX(" + (settings.axis === 'x' ? 0 : values.tiltY) + "deg)\n                rotateY(" + (settings.axis === 'y' ? 0 : values.tiltX) + "deg)\n                scale3d(" + settings.scale + ", " + settings.scale + ", " + settings.scale + ")"
    }));
    elementChildProperties.updateCall = null;
  };

  var reset = function reset() {
    window.requestAnimationFrame(function () {
      setStyle(_extends({}, style, {
        transform: "\n                    perspective(1000px)\n                    rotateX(0deg)\n                    rotateY(0deg)\n                    scale3d(1, 1, 1)\n                "
      }));
    });
  };

  var handleMouseEnter = function handleMouseEnter(e) {
    updateChildPosition(e);
    setTransition();
  };

  var handleMouseMove = function handleMouseMove(e) {
    e.persist();

    if (elementChildProperties.updateCall !== null) {
      cancelAnimationFrame(elementChildProperties.updateCall);
    }

    elementChildProperties.updateCall = requestAnimationFrame(update.bind(wrapperElement, e));
  };

  var handleMouseLeave = function handleMouseLeave() {
    setTransition();

    if (settings.reset) {
      reset();
    }
  };

  return React.createElement("div", Object.assign({
    ref: wrapperElement,
    style: _extends({}, defaultStyles, styles),
    onMouseEnter: handleMouseEnter,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave
  }, props), React.createElement(ChasingElement, {
    styles: style
  }, chasingElement));
};

export { ChasingElement, MouseContainer };
//# sourceMappingURL=index.modern.js.map
