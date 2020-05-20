import React from 'react';


export default class AddItemForm extends React.Component {

  onSubmitForm = (event) => {
    event.preventDefault()
    this.props.onAddItem(event.target.itemToAdd.value)
  }
  render() {
    return (
      <form onSubmit={this.onSubmitForm}>
        <input name='itemToAdd' type='text' placeholder='carrots' aria-label='Shopping List Item'/>

        <button type='submit'>Add Item</button>
      </form>
    )
  }

}