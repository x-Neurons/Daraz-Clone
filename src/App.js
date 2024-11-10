import './App.css';
import { useState } from 'react'
import Content from './component/Content';
import Navbar from './component/Navbar';
import Slider from './component/Slider';
import {product} from "./data";
import {header} from "./header";
import Header from './component/Header';
import Bar from './component/Bar';


function App() {
  const [dataapi , setDataapi] = useState(product);
  return (
    <div className="App">
      <Navbar/>
      <Slider/>
      <Bar/>
      <Header pro = {header}/>
      <Content pro = {dataapi}/>
    </div>
  );
}

export default App;
