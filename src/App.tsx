import React from 'react'
import './App.css'

import { MouseContainer, ChasingElement } from './App/'

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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        React Mouse Image Move
      </header>

      <MouseContainer
          options={{
            max: 20,
            perspective: 1000,
            scale: 1.05,
            speed: 1000,
            transition: false
          }}
          styles={styles.mouseContainer}
          chasingElement={
            <ChasingElement styles={styles.chasingElement}>
              <div></div>
            </ChasingElement>
          }
        />
    </div>
  );
}

export default App
