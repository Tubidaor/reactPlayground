import React from 'react';


class Accordion extends React.Component {
  constructor(props){
    super(props)
  }

  static defaultProps = {
    sections: []
  }

  state = {
    currentIndex: 0
  }


  renderButtons = () => {
    return this.props.sections.map((section,index) => (
      <li>
        <button key={index} onClick={() => this.clickButton(index)}>
          {section.title}
        </button>
        {(index === this.state.currentIndex) && <p>{section.content}</p>}
      </li>
    ))
  }

  clickButton = (index) => {
    this.setState({
      currentIndex: index
    })
  }


  render() {

      return ( 
        <ul className='Accordion'>
          {this.renderButtons()}
        </ul>
      )
  }
}

export default Accordion;