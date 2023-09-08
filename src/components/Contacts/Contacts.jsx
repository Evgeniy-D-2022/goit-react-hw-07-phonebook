import React from "react";
import css from './Contacts.module.css';
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "redux/operations";
import { selectContacts, selectFilter } from "redux/selectors";



const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const visibleContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(filter.toLowerCase()));

    return (
      
        <ul className={css.contacts__list}>
        {visibleContacts.map(contact => 
          (<li className={css.contacts__item} key={contact.id}>
          <p className={css.contacts__text}> {contact.name}:
            </p>
            <p className={css.contacts__text}> {contact.number}
            </p>

            <button
            className={css.contacts__delBtn}
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}>
            Delete
          </button>
            </li>
          ))}
      </ul>
       
    )};

export default Contacts;