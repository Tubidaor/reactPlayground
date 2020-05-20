import React from 'react';
import './Wolverine.css';
import ULLI from './ULLI';

export default function Wolverine(props) {
  return (
    <div className="WolverineContainer">
      <ULLI ulClass="shoulders" howMany={10}/>
    </div>
  )
}