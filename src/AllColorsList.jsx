
export default function AllColorsList({selectedColor, setSelectedColor}) {

const colors = ["yellow", "green", "black"];


return (
    <ul className="colors">
        {colors.map((color) => (
          <li key={color} className={selectedColor===color?color:""}onClick={() => setSelectedColor(color)}>
            {color}
          </li>
  ))}
    </ul>

  );

}