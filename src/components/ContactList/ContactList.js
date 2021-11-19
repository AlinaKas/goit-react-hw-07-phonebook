import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
// import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  deleteContact,
  fetchContacts,
} from '../../redux/contacts/contacts-operations';
import {
  // getContacts,
  // getFilter,
  getVisibleContacts,
} from '../../redux/contacts/contacts-selectors';

const ContactList = () => {
  // const contacts = useSelector(getContacts);
  // const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(getVisibleContacts);

  return (
    <>
      <h2 className={s.title}>Contacts</h2>
      <ul className={s.list}>
        {contacts.map(({ name, phone, id }) => (
          <li key={id} className={s.item}>
            {`${name}: ${phone}`}
            <button
              className={s.btn}
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  // onDeleteContact: PropTypes.func,
};

// const getVisibleContacts = (allContacts, filter) => {
//   const normalizedFilter = filter.toLowerCase();
//   return allContacts.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter),
//   );
// };

// const mapStateToProps = ({ contacts: { items, filter } }) => ({
//   contacts: getVisibleContacts(items, filter),
// });

// const mapDispatchToProps = dispatch => ({
//   onDeleteContact: id => dispatch(deleteContact(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

export default ContactList;
