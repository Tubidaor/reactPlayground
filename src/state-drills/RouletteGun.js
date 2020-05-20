import React from 'react';

class RouletteGun extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chamber: {},
      spinninTheChamber: false
    }
  }

  static defaultProps = {
    bulletInChamber: 8
  }
 
  pullTrigger = () => {
    this.setState({
      spinninTheChamber: true,
    })

    setTimeout(() => {
      let bullet = Math.ceil(Math.random() * 8)
      this.setState({
        spinninTheChamber: false,
        chamber: bullet
      })
    },2000)
  }

  render() {
    return (
      <div>
        <p>{this.state.spinninTheChamber === true ? 'spinning the chamber and pulling the trigger...': this.state.chamber === this.props.bulletInChamber ? 'bang!': "you're safe"}</p>
        <button onClick={this.pullTrigger}>pull the trigger</button>
      </div>
    )
  }
}

export default RouletteGun;