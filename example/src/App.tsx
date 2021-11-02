import React from 'react'

import { MouseContainer, ChasingElement } from 'react-mouse-image-move'
import './App.css'

const styles = {
  mouseContainer: {
    backgroundColor: '#d3eeca',
    width: '100%',
    height: '70vh'
  },
  chasingElement: {
    backgroundColor: '#7771c7',
    width: 400,
    height: 300
  }
}

function App() {
  return (
    <div className='App'>
      <header className='App-header'>React Mouse Image Move</header>

      <h1>With perspective:</h1>
      <hr />

      <MouseContainer
        options={{
          effectType: 'perspective',
          perspective: 1000,
          scale: 1.05,
          speed: 1000
        }}
        styles={styles.mouseContainer}
        chasingElement={
          <ChasingElement styles={styles.chasingElement}>
            <div />
          </ChasingElement>
        }
      />

      <h1>With movement:</h1>
      <hr />

      <MouseContainer
        options={{
          effectType: 'movement',
          scale: 1.05,
          speed: 1000
        }}
        styles={styles.mouseContainer}
        chasingElement={
          <ChasingElement styles={styles.chasingElement}>
            <div />
          </ChasingElement>
        }
      />
    </div>
  )
}

export default App
