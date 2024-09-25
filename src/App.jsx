import { useState } from 'react'
import AllColorsList from './AllColorsList';
import ColorDetails from './ColorDetails';
import './App.css';

export default function App() {
const [selectedColor, setSelectedColor] = useState();
  
return (
  <div>
    <ColorDetails selectedColor={selectedColor} />
    <AllColorsList selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
   </div>
)
}


