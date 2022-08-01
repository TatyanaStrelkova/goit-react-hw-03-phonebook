import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Button } from '../Button/Button.styled';
import { ContactsForm, ContactsLabel, ContactsInput } from './Form.styled';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  onInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    this.props.onSubmit(contact);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <ContactsForm onSubmit={this.handleSubmit}>
        <ContactsLabel>
          {' '}
          Name
          <ContactsInput
            onChange={this.onInputChange}
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </ContactsLabel>
        <ContactsLabel>
          {' '}
          Number
          <ContactsInput
            onChange={this.onInputChange}
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </ContactsLabel>
        <Button type="submit">Add contact</Button>
      </ContactsForm>
    );
  }
}

export default Form;
