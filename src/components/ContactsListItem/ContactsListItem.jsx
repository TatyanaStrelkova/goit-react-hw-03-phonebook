import { ListItem } from './ContactsListItem.styled';
import { Button } from '../Button/Button.styled';

const ContactsListItem = ({ id, name, number, onDelete }) => {
  return (
    <ListItem>
      {name}: {number}
      <Button type="button" onClick={() => onDelete(id)}>
        Delete
      </Button>
    </ListItem>
  );
};

export default ContactsListItem;
