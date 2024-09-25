
export default function AllColorsList ({selectedColor, setSelectedColor}){

const colors = ["red", "green", "black"];


return (
    <ul className="colors">
        {colors.map((color) => (
          <li key={color.id} onClick={() => chooseColor(color.id)}>
            {color.name}
          </li>
  ))}
    </ul>

  );

}