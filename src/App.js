import { Component } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import Container from './components/Container/Container';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = ({ name, number }) => {
    this.setState(({ contacts }) => ({
      contacts: [...contacts, { name, number, id: nanoid() }],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    return (
      <main className="App">
        <Container>
          <h1>Phonebook</h1>
          <ContactForm onAddContact={this.addContact} />

          <h2>Contacts</h2>
          <Filter />
          <ContactList
            contacts={this.state.contacts}
            onDeleteContact={this.deleteContact}
          />
        </Container>
      </main>
    );
  }
}

export default App;
