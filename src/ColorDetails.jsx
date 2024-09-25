export default function ColorDetails({selectedColor}) {


  return (
    <header>
    <h2>Currently selected:</h2>
    <h2 className= "selectedColor">{selectedColor}</h2>
    </header>
  );
}