import ContactList from './components/ContactList';
import Form from './components/Form';
import Filter from './components/Filter';

function App() {
  // render() {
  return (
    <>
      {/* <Form onSubmit={addContactHandler} />
      <Filter onChange={changeFilter} value={filter} />
      <ContactList contacts={visibleContacts} onDeleteContact={deleteContact} /> */}

      <Form />
      <Filter />
      <ContactList />
    </>
  );
}
// }

export default App;
