import React from 'react';

class Ticktock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }


  componentDidMount() {
    let counter = this.state.count
    this.interval = setInterval(() => {
      counter = counter + 1
      function tick(counter) {
        if (counter >= 8) {
          return 'bomb'
        } 
        if (counter % 2 !== 0) {
          return 'tick'
        } 
        if (counter % 2 === 0) {
          return 'tock'
        }
      }
      if (counter > 8){
        clearInterval(this.interval)
      }
      this.setState({
        count: tick(counter)
        // count: counter
      })
      // console.log(tick(counter))
      console.log(this.state.count)
    },1000)
  }

  componentWillMount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
      </div>
    )
  }

}

export default Ticktock;