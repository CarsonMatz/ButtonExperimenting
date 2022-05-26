import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from './Components';
import './CSS/specs.css';
import { } from './Components/Button';

function App() {
  return (
    <div className="App">
      //button that goes to gdg website when clicked
      <Button
        onMouseOver = {() => "this.style.opacity = '0.3'"} //doesn't do anything
        onClick = {() => window.open('https://gamedayguru.com/', '_self')}
        variant =  'default'
        size = 'md'
      />
    </div>
  );
}

export default App;
