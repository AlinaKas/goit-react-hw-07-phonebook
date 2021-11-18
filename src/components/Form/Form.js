import { useState } from 'react';
import s from './Form.module.css';
import { addContact } from '../../redux/contacts/contacts-actions';
// import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';

const Form = () => {
  // state = {
  //   name: '',
  //   number: '',
  // };

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  // handleInputChange = event => {
  //   const { name, value } = event.currentTarget;
  //   this.setState({
  //     [name]: value,
  //   });
  // };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addContact(name, number));
    setNumber('');
    setName('');
  };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   addContact(name, number);
  //   resetForm();
  // };

  // const resetForm = () => {
  //   setName('');
  //   setNumber('');
  // };

  // render() {
  //   const { name, number } = this.state;

  return (
    <>
      <h1 className={s.title}>Phonebook</h1>
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            placeholder="Rosie Simpson"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={handleInputChange}
          />
        </label>
        <label className={s.label}>
          Number
          <input
            className={s.input}
            type="tel"
            name="number"
            placeholder="+38(0XX)-XXX-XX-XX"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={number}
            onChange={handleInputChange}
          />
        </label>
        <button className={s.btn} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};

// const mapDispatchToProps = dispatch => ({
//   addContact: (name, number) => dispatch(addContact(name, number)),
// });

// export default connect(null, mapDispatchToProps)(Form);

export default Form;
