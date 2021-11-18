import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
// import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-actions';
import {
  getContacts,
  getFilter,
} from '../../redux/contacts/contacts-selectors';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  function getVisibleContacts() {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  }

  const visibleContacts = getVisibleContacts();

  return (
    <>
      <h2 className={s.title}>Contacts</h2>
      <ul className={s.list}>
        {visibleContacts.map(({ name, number, id }) => (
          <li key={id} className={s.item}>
            {`${name}: ${number}`}
            <button
              className={s.btn}
              type="button"
              // onClick={()=>{onDelete(id)}}
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
