import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";


const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
}


export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
        error: null,
        isLoading: false,

    },
    extraReducers: {
        [fetchContacts.pending]: handlePending,
        [addContact.pending]: handlePending,
        [deleteContact.pending]: handlePending,

        [fetchContacts.rejected]: handleRejected,
        [addContact.rejected]: handleRejected,
        [deleteContact.rejected]: handleRejected,

        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.contacts = action.payload;
        },

        [addContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.contacts.push(action.payload);
        },

        [deleteContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload.id);
        },    
    }
});

export default contactsSlice.reducer;