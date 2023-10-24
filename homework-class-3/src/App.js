import { useState } from "react";


function App() {

  const [width, setwidth] = useState(15);

  const [height, setheight] = useState(15);


  const calc = () => {
    setheight(height * 1)
    setwidth(width * 1)
  }


  const handleChangeHeight = e => {
    setheight(e.target.value);
    console.log(height);

  };

  const handleChangeWidth = e => {

    setwidth(e.target.value);
    console.log(width);

  }

  return (
    <>

      <div>

        <label htmlFor="">Width : </label>
        <input type="number" value={width} onChange={handleChangeWidth} />



        <label htmlFor="">Height : </label>
        <input type="number" value={height} onChange={handleChangeHeight} />

      </div>

      <button onClick={calc}> Calc</button>


      <div style={{ width: width, height: height, backgroundColor: "blue", margin: "auto" }}>

      </div>


    </>
  );
}

export default App;
