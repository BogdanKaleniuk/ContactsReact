import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { Item, CloseBtn } from './Contact.styled';

export default function ContactItem({ id, name, phone }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <Item>
      {name}: {phone}
      <CloseBtn type="button" onClick={handleDelete}>
        X
      </CloseBtn>
    </Item>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
