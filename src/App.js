import { useState } from 'react';

import * as math from "mathjs";

import './App.css';
import Button from "./components/Button"
import Input from "./components/Input";

const App = () => {
 
 const [text, setText] = useState("");
 const [result, setResult] = useState("")


 const addToText = (val) => {
  setText((text) => [...text, val + " "])
 };

 const Clears = () => {
  setText("");
  setResult("");
 };

 const maths = () => { 
  const input = text.join("")

  setResult(math.evaluate(input))
 }
 
 
  return (
    <div className="App">
      
      <div className="calc-wrapper">
      
      <Input text={text} result={result}/>
      
      <Button Character="Clear" backc='red' click={Clears}/>
        <div className='row'>
        <Button Character="7" click={addToText} />
        <Button Character="8" click={addToText} />
        <Button Character="9" click={addToText}/>
        <Button Character="/" backc='blue' click={addToText}/>
        </div>
        <div className='row'>
        <Button Character="4" click={addToText}/>
        <Button Character="5" click={addToText}/>
        <Button Character="6" click={addToText}/>
        <Button Character="*" click={addToText} backc='blue'/>
        </div>
        <div className='row'>
        <Button Character="1" click={addToText} />
        <Button Character="2"click={addToText} />
        <Button Character="3" click={addToText}/>
        <Button Character="+" click={addToText} backc='blue'/>
        </div>
        <div className='row'>
        <Button Character="0" click={addToText}/>
        <Button Character="." click={addToText} backc='blue'/>
        <Button Character="=" backc='blue' click={maths}/>
        <Button Character="-" click={addToText} backc='blue'/>
        </div>

      </div>
    </div>
  );
}

export default App;
