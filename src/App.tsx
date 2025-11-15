import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// Import your component here!

/** You may ignore most of the boilerplate in App(), but you should take notice of a few things:
 *  1. Classes are set not using class="", but className="" | Ask AI why this is the case with JSX/TSX
 *  2. Pay close attention to count and setCount. We will cover how they are initialized and used in a later lecture.
 *  3. Look at how count is referenced as {count} in plain text. This is almost functionally identical to the `My name is ${name}.` string literal syntax.
 *  4. There is an empty tag surrounding the TSX. | Ask AI why this is
 */
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {/* Add your component(s) below this line after importing! e.g. <MyNav></MyNav> */}
    </>
  )
}

export default App
