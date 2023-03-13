import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="container mx-auto flex flex-col justify-center items-center space-y-4 text-2xl bg-blue-400 my-6 p-2">
        <h1>React + Tailwind ?</h1>
        <h1>Ohhh!</h1>
      </div>
    </div>
  )
}

export default App
