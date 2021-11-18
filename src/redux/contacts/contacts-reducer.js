// import { ADD, DELETE, FILTER } from '../action-types';
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  filterContact,
} from '../contacts/contacts-actions';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const items = createReducer(initialContacts, {
  [addContact]: (state, { payload }) => {
    const duplicateContact = state.find(
      contact => contact.name === payload.name,
    );
    if (duplicateContact) {
      alert(`${payload.name} is already in contacts`);
      return state;
    } else {
      return [payload, ...state];
    }
  },
  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [filterContact]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});

//VANILLA REDUX

// const initialContacts = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

// const items = (state = initialContacts, { type, payload }) => {
//   switch (type) {
//     case ADD:
//       const duplicateContact = state.find(
//         contact => contact.name === payload.name,
//       );
//       if (duplicateContact) {
//         alert(`${payload.name} is already in contacts`);
//         return state;
//       } else {
//         return [payload, ...state];
//       }
//     case DELETE:
//       return state.filter(({ id }) => id !== payload);
//     default:
//       return state;
//   }
// };

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

// export default combineReducers({
//   items,
//   filter,
// });
