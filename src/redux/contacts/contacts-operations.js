import axios from 'axios';
import * as actions from './contacts-actions';

axios.defaults.baseURL =
  'https://61965d6eaf46280017e7dff4.mockapi.io/api/phonebook';

export const addContact = (name, phone) => dispatch => {
  const contact = {
    name,
    phone,
  };
  dispatch(actions.addContactRequest());
  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(actions.addContactSuccess(data)))
    .catch(error => dispatch(actions.addContactError(error)));
};

export const deleteContact = id => dispatch => {
  dispatch(actions.deleteContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(actions.deleteContactSuccess(id)))
    .catch(error => dispatch(actions.deleteContactError(error)));
};