import PropTypes from 'prop-types';
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

ContactsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.elementType.isRequired,
};

export default ContactsListItem;
