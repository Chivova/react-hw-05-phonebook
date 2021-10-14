import Container from './components/Container';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

import 'modern-normalize/modern-normalize.css';

function App() {
  // const [contacts, setContacts] = useState(
  //   () =>
  //     JSON.parse(window.localStorage.getItem('contacts')) ?? [
  //       {
  //         id: 'id-1',
  //         name: 'Rosie Simpson',
  //         number: '459-12-56',
  //       },
  //       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //     ],
  // );
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  //   contacts.find(
  //     contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase(),
  //   )
  //     ? alert(`${name} is already in contacts `)
  //     : setContacts([contact, ...contacts]);
  // };

  // const handleFilterConacts = e => {
  //   const { value } = e.target;

  //   setFilter(value);
  // };

  // const normalizedContacts = filter.toLocaleLowerCase();

  // const visibileContacts = contacts.filter(contact =>
  //   contact.name.toLocaleLowerCase().includes(normalizedContacts),
  // );

  return (
    <Container>
      <ContactForm />
      {/* <Filter value={filter} onChange={handleFilterConacts} /> */}
      {/* <ContactList contacts={visibileContacts} onClick={deleteContact} /> */}
      <Filter />

      <ContactList />
    </Container>
  );
}

export default App;
