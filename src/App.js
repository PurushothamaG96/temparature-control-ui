import React, {useState} from "react"
import './App.css';

function App() {
const [temp, setTemp] = useState(15)

const handleInc = ()=>{
  if(temp === 25){
    return temp
  }
  else{
    setTemp((old)=>old+1)
  }
}
const handleDec =()=>{
  if(temp === 0){
    return temp
  }
  else{
    setTemp((old)=>old-1)
  }
}
  return (
    <div className="App">
      <div className='container'>
        <div className='degree' style={{background:`rgb(${temp*10}, 255, 0)`}}>
          <h1>
          {temp}<sup>o</sup><span>C</span>
          </h1>
          
        </div>
        <div className="btn-container">
            <button onClick={handleInc}><h1>+</h1></button>
        </div>
        <div className="btn-container">
        <button onClick={handleDec}><h1>-</h1></button>
        </div>

      </div>

    </div>
  );
}

export default App;
