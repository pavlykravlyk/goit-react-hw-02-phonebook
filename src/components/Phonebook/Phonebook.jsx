import React, { Component } from 'react';
// import styles from './Phonebook.module.css';

export class Phonebook extends Component {
  state = {
    contacts: [],
    name: 'Pavlo',
  };

  handleNameChange = event => {
    // console.log(event.currentTarget.value);
    this.setState({ name: event.currentTarget.value });
  };

  render() {
    return (
      <div>
        <form>
          <label htmlFor="">
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </label>
        </form>
      </div>
    );
  }
}

export default Phonebook;
