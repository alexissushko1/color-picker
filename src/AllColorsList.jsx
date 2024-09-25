
export default function AllColorsList({selectedColor, setSelectedColor}) {

const colors = ["yellow", "green", "black"];


return (
    <ul className="colors">
        {colors.map((color) => (
          <li 
          key={color} 
          className={`${color} ${color===selectedColor?"selected":""}`}onClick={() => setSelectedColor(color)}>
            {color}
          </li>
  ))}
    </ul>

  );

}