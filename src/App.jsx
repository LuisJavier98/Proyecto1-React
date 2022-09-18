import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Quotebox from './Quotebox'
import color from './colores'

function App() {

  const firstColor = () => color[Math.floor(Math.random() * color.length)]
  const [colorRandom, setcolorRandom] = useState(firstColor())
  const getColorRandom = () => setcolorRandom(firstColor())
  return (
    <div style={{ backgroundColor: colorRandom }} className="App">
      <Quotebox
        colorRandom={colorRandom}
        getColorRandom={getColorRandom} />
    </div>
  )
}
export default App
