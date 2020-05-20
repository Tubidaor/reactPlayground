import React from 'react';
import ShoppingItem from './ShoppingItem.js'

export default class ShoppingList extends React.Component {

  render() {
    return (
      <ul>
        {this.props.items.map((item,i) => 
        <ShoppingItem 
          key={i} 
          item={item}
          onDeleteItem={this.props.onDeleteItem}
          onCheckItem={this.props.onCheckItem} 
          />
        )}
      </ul>
    )}
}

ShoppingList.defaultProps = {
  items: []
}