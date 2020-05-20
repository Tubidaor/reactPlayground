import React from 'react';
import AddItemForm from './AddItemForm.js';
import ShoppingList from './ShoppingList.js';

class AppDisplay extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    shoppingItems: [
      { name: 'apples', checked: false},
      { name: 'oranges', checked: true},
      { name: 'bread', checked: false}
    ]
    }
  
    handleDeleteItem = (item) => {
      console.log('handle delete item called', item)
      const newItems = this.state.shoppingItems.filter(itm => itm !== item)
      this.setState({
        shoppingItems: newItems
      })
    }
  
    handleCheckItem = (item) => {
      console.log('handle check item called', item)
      const newItems = this.state.shoppingItems.map(itm => {
        if (itm === item) {
          itm.checked = !itm.checked
        }
        return itm
      })
      this.setState({
        shoppingItems: newItems
      })
    }
    
    handleAddItem = (itemName) => {
      console.log( 'was added', itemName)
      const newItems = [
        ...this.state.shoppingItems,
        {name: itemName, checked: false}
      ]
      this.setState({
        shoppingItems: newItems
      })
    }

    render() {
      return (
        <>
          <header>
            <h1>ShoppingList</h1>
          </header>
          <main>
            <section>
              <AddItemForm onAddItem={this.handleAddItem}/>
            </section>
            <section>
              <ShoppingList
                items={this.state.shoppingItems}
                onDeleteItem={this.handleDeleteItem}
                onCheckItem={this.handleCheckItem}
                />
            </section>
          </main>
        </>
      )
    }
}

export default AppDisplay;