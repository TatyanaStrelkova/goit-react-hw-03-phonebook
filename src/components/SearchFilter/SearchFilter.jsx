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

export default SearchFilter;
