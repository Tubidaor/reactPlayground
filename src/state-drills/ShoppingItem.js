import React from 'react';

export default class ShoppingItem extends React.Component {
  
  render() {
    return (
      <li>
        <h2
          style={{textDecoration: this.props.item.checked ? 'line-through': null}}
        >
          {this.props.item.name}
        </h2>
        <button type='button' onClick={() => this.props.onCheckItem(this.props.item)}> check</button>
        <button type='button' onClick={() => this.props.onDeleteItem(this.props.item)}> delete</button>
      </li>
    )
  }
}

ShoppingItem.defaultProps = {
  item: {}
}