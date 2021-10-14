## Getting started

```
npm i react-mouse-image-move -D
```
or
```
yarn add react-mouse-image-move -D
```

## How to work

Basicly, import ```MouseContainer``` and ```ChasingElement``` to your application:

```javascript
import { MouseContainer, ChasingElement } from 'react-mouse-image-move'
```

Create your styles:
```javascript
const styles = {
  mouseContainer: {
    backgroundColor: '#d3eeca',
    width: '100%',
    height: '70vh',
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  chasingElement: {
    backgroundColor: '#7771c7',
    width: 400,
    height: 300
  }
}
```

Call to your application:

```javascript
function App() {
  return (
    <div>
      <MouseContainer
          options={{
            max: 10,
            perspective: 1000,
            scale: 1.05,
          }}
          styles={styles.mouseContainer}
          chasingElement={
            <ChasingElement styles={styles.chasingElement} chasingComponent={<div>lala</div>} />
          }
      />
    </div>
  );
}

export default App
```

---
## Elements

<br>

#### MouseContainer

| Property       | Description                           | Required  |
| -------------- | ------------------------------------- | --------- |
| chasingElement | ```<ChasingElement />``` as children  | yes       |
| styles         | Your styles                           | no        |
| options        | Options to child effect               | no        |


```javascript
// Options
{
    max: 10, // Element child rotation
    perspective: 1000, // Rotation depth
    easing: 'cubic-bezier(.03,.98,.52,.99)', // Transition between values
    scale: 1.05, // How much does the size increase
    speed: 1000, // Speed for transition element
    axis: null|'x'|'y', // "x" only move horizontaly, "y" only move verticaly, "null" both
    reset: true|false // If reset element or keep last position value
}
```

<br>

---

#### ChasingElement

| Property         | Description                           | Required  |
| ---------------- | ------------------------------------- | --------- |
| chasingComponent | HTML element as children              | yes       |
| styles           | Your styles                           | no        |