import { createSlice } from "@reduxjs/toolkit";
import initContacts from '../components/contacts.json';
import { nanoid } from "nanoid";


export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: initContacts,
    },
    reducers: {
        addContact: {
            reducer(state, action) {
                state.contacts.push(action.payload)
            },
            prepare (contact) {
                return {
                    payload: {
                    ...contact, 
                    id: nanoid(),
                }
                }
            }
        },

        deleteContact: {
            reducer(state, action) {
                state.contacts = state.contacts.filter(item =>
                     item.id !== action.payload.id)
            }
        }

    }
});

export const { addContact, deleteContact } = contactsSlice.actions;