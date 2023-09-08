import css from './App.module.css'
import Form from "../Form/Form";
import Contacts from "../Contacts/Contacts";
import Filter from "../Filter/Filter";
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

const App = () => {

  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(fetchContacts());
  }, [dispatch]);
  

    return (
    <div className={css.container}>
       <h1 className={css.title}>Phonebook</h1>
     <Form />
     {contacts.length > 0 ? (
      <>
      <h2 className={css.contacts__title}>Contacts</h2>
      <Filter />
      <Contacts />
      </>
     ) : (
     <p className={css.contacts__text}>No available contacts</p>
     )}  
     {isLoading && !error && <p>Loading...</p>}
    </div>
    );
  };

export default App;