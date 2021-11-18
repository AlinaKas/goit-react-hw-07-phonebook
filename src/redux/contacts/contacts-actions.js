// import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

export const deleteContactRequest = createAction(
  'contacts/deleteContactRequest',
);
export const deleteContactSuccess = createAction(
  'contacts/deleteContactSuccess',
);
export const deleteContactError = createAction('contacts/deleteContactError');

// export const addContact = createAction('contacts/add', (name, number) => ({
//   payload: {
//     name,
//     number,
//     id: shortid.generate(),
//   },
// }));
// export const deleteContact = createAction('contacts/delete');
export const filterContact = createAction('contacts/filter');
