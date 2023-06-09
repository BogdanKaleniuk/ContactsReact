import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { TaskList } from 'components/ContactList/ContactList';
import { ContactEditor } from 'components/ContactEditor/ContactEditor';
import { fetchContacts } from 'redux/contacts/operations';
<<<<<<< HEAD
import {
  selectIsLoading,
  selectError,
  selectContacts,
} from 'redux/contacts/selectors';
=======
import { getIsLoading, getError, getContacts } from 'redux/contacts/selectors';
>>>>>>> 464a808e06d48a53626d4cca498559177f0981db
import ContactList from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter.jsx';
import { CircularProgress } from '@chakra-ui/react';

export default function ContactsPage() {
  const dispatch = useDispatch();
<<<<<<< HEAD
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
=======
  const isLoading = useSelector(getIsLoading);
  const contacts = useSelector(getContacts);
  const error = useSelector(getError);
>>>>>>> 464a808e06d48a53626d4cca498559177f0981db

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactEditor />

      {contacts.length > 0 && (
        <>
          <Filter />
        </>
      )}
      <div>
        {isLoading && (
          <CircularProgress isIndeterminate color="green.300" size="30px" />
        )}
      </div>
      <ContactList />
      {error}
      {contacts.length > 1 && <div>У вас {contacts.length} контактів </div>}
    </>
  );
}
