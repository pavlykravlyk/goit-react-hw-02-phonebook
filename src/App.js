import { Component } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import Container from './components/Container/Container';
import ContactList from './components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import initialContacts from '../src/contacts.json';

class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  addContact = ({ name, number }) => {
    const newContact = { name, number, id: nanoid() };

    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));

    if (newContact.name === this.state.contacts.name) {
      console.log('2424234');
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  findContactsByName = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  filterContactList = () => {
    const { contacts, filter } = this.state;
    const filteredContacts = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filteredContacts),
    );
  };

  render() {
    const { filter } = this.state;
    const { addContact, findContactsByName, filterContactList, deleteContact } =
      this;

    return (
      <main className="App">
        <Container>
          <h1>Phonebook</h1>
          <ContactForm onAddContact={addContact} />

          <h2>Contacts</h2>
          <Filter contactName={filter} onFindContact={findContactsByName} />
          <ContactList
            contacts={filterContactList()}
            onDeleteContact={deleteContact}
          />
        </Container>
      </main>
    );
  }
}

export default App;
