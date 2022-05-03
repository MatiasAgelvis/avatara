import Avatara from "../lib/avatara";
import { useState, useEffect } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { RgbaStringColorPicker } from "react-colorful";

const avatar = new Avatara();

function App() {
  const options = [
    { value: "background", label: "Background" },
    { value: "square", label: "Square" },
    { value: "circle", label: "Circle" },
    { value: "rectangle", label: "Rectangle" },
    { value: "gradient", label: "Gradient" },
  ];
  const defaultOption = options[0];

  const [shape, setShape] = useState(defaultOption);
  const [color, setColor] = useState("#fff");
  const [image, setImage] = useState(avatar.toDataURL());

  const onChange = (setter) => (event) => setter(event.value);
  // const onChange = (setter) => (event) => console.log(event.value);

  const updateShape = () => {
    console.log(shape)
    avatar[shape](color);
    setImage(avatar.toDataURL());
    setShape("");
    setColor("");
  };


  return (
    <div>
      <div>Enter Shape</div>
      <Dropdown
        options={options}
        onChange={onChange(setShape)}
        value={shape}
        placeholder="Select an option"
      />
      <div>Enter Color</div>
      <RgbaStringColorPicker color={color} onChange={setColor} />
      <br />
      <button onClick={updateShape}>Enter</button>
      <br />
      <br />
      <img src={image} />
    </div>
  );
}

export default App;