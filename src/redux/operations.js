import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.default.baseURL = 'https://64f9e1604098a7f2fc151d3f.mockapi.io';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/contacts');
            return response.data;   
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContacts',
    async (contact, thunkAPI) => {
        try {
            const response = await axios.post('/contacts', contact);
            return response.data;
            
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);  
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${contactId}`);
            return response.data;
            
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);  
        }
    }
);