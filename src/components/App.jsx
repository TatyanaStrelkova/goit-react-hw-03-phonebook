import React, { Component } from 'react';
import Form from './Form';
import ContactsList from './ContactsList';
import SearchFilter from './SearchFilter';
import { Container } from './Container/Container.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  changeFilter = e => {
    const { value } = e.currentTarget;
    this.setState({ filter: value });
  };

  addContact = contact => {
    const { contacts } = this.state;
    const repeatedContact = contacts
      .map(cont => cont.name)
      .includes(contact.name);
    if (repeatedContact) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    this.setState({
      contacts: [...contacts, contact],
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  getFilteredItems = () => {
    const { contacts, filter } = this.state;
    const normalizedFiltered = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFiltered)
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredItems();

    return (
      <Container>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <SearchFilter value={filter} changeFilter={this.changeFilter} />
        <ContactsList
          contacts={filteredContacts}
          onDelete={this.deleteContact}
        />
      </Container>
    );
  }
}
