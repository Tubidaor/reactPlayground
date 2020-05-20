import React from 'react';


export default function ULLI(props) {

  const numOfLi = props.howMany
  const liSection = []
  for(let i = 1; i <= numOfLi; i++) {
    liSection.push(i)
  }
console.log(liSection)
let displayLi = liSection.map(li => <li key={li} className={`${props.ulClass} li${li}`}> </li>)


  return(
    <ul className={props.ulClass + "Container"}>
      {displayLi}
    </ul>
  )
}