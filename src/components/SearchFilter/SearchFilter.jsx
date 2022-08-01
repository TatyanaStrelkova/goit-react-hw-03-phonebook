import PropTypes from 'prop-types';
import { ContactsLabel, ContactsInput } from '../Form/Form.styled';

const SearchFilter = ({ value, changeFilter }) => {
  return (
    <ContactsLabel>
      Find contacts by name
      <ContactsInput
        type="text"
        name="filter"
        value={value}
        onChange={changeFilter}
      />
    </ContactsLabel>
  );
};

SearchFilter.propTypes = {
  value: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default SearchFilter;
