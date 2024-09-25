export default function ColorDetails({selectedColor}) {


  return (
    <header>
    <h2>Currently selected:</h2>
    <div className= {selectedColor ? selectedColor : " "}>{selectedColor ? selectedColor: "None"}</div>
    </header>
  );
}