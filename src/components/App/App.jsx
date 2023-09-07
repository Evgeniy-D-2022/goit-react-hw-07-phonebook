import css from './App.module.css'
import Form from "../Form/Form";
import Contacts from "../Contacts/Contacts";
import Filter from "../Filter/Filter";
import { useSelector } from 'react-redux';

const App = () => {

  const contacts = useSelector(state => state.contacts.contacts);
  // console.log(contacts);

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
    </div>
    );
  };

export default App;