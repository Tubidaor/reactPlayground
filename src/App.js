import React, { Component } from 'react';
import './App.css';
import Thedate from './state/Thedate.js';
import Counter from  './state/Counter.js';
import HelloWorld from './state-drills/HelloWorld.js';
import Ticktock from './state-drills/bomb.js';
import Roulette from './state-drills/RouletteGun.js';
import Tabs from './state/Tabs.js'
import Accordion from './state-drills/Accordion.js'
import Yoda from './Yoda/yoda';
import Wolverine from './Wolverine/Wolverine'


// const tabsProp = [
//   {
//     name:'First tab',
//     content: 'lorem imposum dolor sit'
//   },
//   {
//     name: 'Second tab',
//     content: 'laboriasam excercitationem'
//   },
//   { name:'Third tab',
//     content: 'Futit, sapiente'
//   }
// ];

const sections = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Thedate /> */}
        {/* <Counter /> */}
        {/* {<HelloWorld />}
        {<Ticktock />}
        {<Roulette />} */}
        {/* {<Tabs tabs={tabsProp} />} */}
        {/* {<Accordion sections={sections} />} */}
        <Yoda/>
        <Wolverine/>

      </div>
    );
  }
}

export default App;