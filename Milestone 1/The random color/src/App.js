import { useState } from "react";
 function App() {
  const [color, changeColor] = useState([
    "#4e417e","#02dc92","#dfbaa0","#d8294e","#7c31d3","#7fcfd2","#0e5d46","#d98590",
    "#7923d7","#6e5eeb","#2a176b","#dea1d8","#cbae6f","#b6841d","#62df7d","#9e4d2c",
    "#7010b2","#c50007","#cfe583","#cdb58e","#298b5d","#58e253","#a9c3c5","#66fec5",
    "#7010b2","#c50007","#cfe583","#cdb58e","#298b5d","#58e253","#a9c3c5","#66fec5"
  ]);
  const getColor = () => {
    let randomcolor = [];
    for (var i = 0; i < 32; i++) {
      randomcolor.push("#" + Math.floor(Math.random() * 16777215).toString(16));
    }
    changeColor(randomcolor);
  };
  return (
    <div className="App">
      <div className="centre"><button className="button" onClick={getColor}>color</button></div>
      <br/>
      {color.map((dt) => (
        <div className="Change" style={{ backgroundColor: dt }}>
          {dt}
        </div>
      ))}
    </div>
  );
}
export default App;