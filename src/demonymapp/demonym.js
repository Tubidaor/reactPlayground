import React, { Component } from 'react';


class Demonym extends Component {
  render() {
    return (
      <div className="demonym">
        A {this.props.name} comes from {this.props.country}.
      </div>
    );
  }
}

export default Demonym;