import { Component } from 'react';
import styles from './ContactForm.module.css';

// const FORM_CONFIG = [
//   {
//     type: 'text',
//     name: 'name',
//     pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
//     title:
//       "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
//   },
//   {
//     type: 'tel',
//     name: 'number',
//     pattern: '+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}',
//     title:
//       'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
//   },
// ];

class Phonebook extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onAddContact(this.state);
    this.resetState();
  };

  resetState = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.Form}>
        <label htmlFor="" className={styles.Label}>
          Name
          <input
            className={styles.Input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="" className={styles.Label}>
          Number
          <input
            className={styles.Input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit" className={styles.Btn}>
          add contact
        </button>
      </form>
    );
  }
}

export default Phonebook;
