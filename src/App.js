import React, { Component } from 'react';

import Form from './components/Form/Form';
import Filter from './components/Filter/Filter';
import Contacts from './components/Contacts/Contacts';
import styles from './components/styles.module.css';

import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    if (contacts.some(contact => contact.name.includes(name))) {
      alert(`${name} is already in contacts!`);
    } else {
      this.setState(({ contacts }) => {
        return {
          contacts: [...contacts, { name, number, id: uuidv4() }],
        };
      });
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => {
        return contact.id !== contactId;
      }),
    }));
  };

  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const result = contacts.filter(contacts =>
      contacts.name.toLowerCase().includes(filter.toLowerCase()),
    );
    console.log(result);
    return result;
  };

  componentDidMount() {
    const contactsFrmStorage = JSON.parse(
      window.localStorage.getItem('contacts'),
    );
    if (contactsFrmStorage) {
      this.setState({ contacts: contactsFrmStorage });
    }
  }

  // componentDidMount() {
  //   const { contacts } = this.state;
  //   localStorage.setItem('phoneBook', JSON.stringify({ ...contacts }));
  //   console.log(localStorage);
  //   console.log('contacts = ', { ...contacts });
  //   console.log(`${JSON.stringify({ ...contacts })}`);
  // };

  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('phoneBook', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    return (
      <div className={(styles.container, styles.wrapper)}>
        <h1 className="title">Phonebook</h1>
        <Form onSubmit={this.addContact} />
        <h2 className="title">Contacts</h2>
        <Filter onChange={this.changeFilter} toFind={this.filter} />
        <Contacts
          onFilter={this.filterContacts()}
          onDelete={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
