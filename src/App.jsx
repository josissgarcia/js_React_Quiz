import { useState } from 'react'
import './App.css'
import Quiz from './componentes/Quiz'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div>
      <div class="container"> 
        <img src= "img_quiz.avif" alt="Imagem da palavra Quiz"/>
      </div>
      <Quiz/>
    </div>
  )
}

export default App
