// import { ADD, DELETE, FILTER } from '../action-types';
import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/add', (name, number) => ({
  payload: {
    name,
    number,
    id: shortid.generate(),
  },
}));
export const deleteContact = createAction('contacts/delete');
export const filterContact = createAction('contacts/filter');

//VANILLA REDUX

// export const addContact = (name, number) => ({
//   type: ADD,
//   payload: {
//     name,
//     number,
//     id: shortid.generate(),
//   },
// });

// export const deleteContact = id => ({
//   type: DELETE,
//   payload: id,
// });

// export const filterContact = value => ({
//   type: FILTER,
//   payload: value,
// });
