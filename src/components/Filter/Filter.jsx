import React from "react";
import css from './Filter.module.css';
import { useDispatch } from "react-redux";
import { setStatusFilter } from '../../redux/filterSlice';

const Filter = () => {

    const dispatch = useDispatch();

    const handleChange = e => {
        const query = e.target.value;
        dispatch(setStatusFilter(query))
    }

    return ( 
        <label className={css.filter__label}>Find contacts by name
        <input
        className={css.filter__input}
        type="text"
        name="filter"
        onChange={handleChange}
        />
        </label>

    )
};

export default Filter;
