import { useState } from 'react'
import {allColorsList} from './AllColorsList'
import {colorDetails} from './ColorDetails'
import './App.css'

export default function App() {
const [selectedColor, setSelectedColor] = useState();
  
return (
  <body>
    <ColorDetails selectedColor={selectedColor} />
    <AllColorsList selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
   </body>
)
}


