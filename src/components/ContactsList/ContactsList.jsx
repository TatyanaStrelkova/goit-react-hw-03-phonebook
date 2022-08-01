import ContactsListItem from '../ContactsListItem';
import { List } from './ContactsList.styled';

const ContactsList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ContactsListItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={onDelete}
        ></ContactsListItem>
      ))}
    </List>
  );
};

export default ContactsList;
