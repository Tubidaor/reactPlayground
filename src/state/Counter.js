import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    console.log('props in contructor', props)
    super(props)
    this.state = {
    count: 0,
    name: 'Moodapoo'
    };
  }
  static defaultProps = {
    step: 3,
    add: 3 * 4
  }

  handleButtonClick = () => {
    console.log('props in handleButtonClick', this.props)
    console.log('state in handleButtonclick', this.state)
    const plus1 = this.state.count + this.props.add;
    this.setState({
      count: plus1
    })
  }

  render() {
    return (
      <div>
        <p> The current count: {this.state.count}</p>
        <button onClick={this.handleButtonClick}>
          Add 1
        </button>
      </div>
    );
  }
}

export default Counter;
