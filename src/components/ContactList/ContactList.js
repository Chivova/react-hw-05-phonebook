import PropTypes from 'prop-types';
import s from './ContactList.module.css';

export default function ContactList({ contacts, onClick }) {
  return (
    <ul className={s.contactsList}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.contactsItem} key={id}>
          {name}: {number}
          <button
            className={s.contactsBtn}
            onClick={() => onClick(id)}
            type="button"
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ),
  onClick: PropTypes.func.isRequired,
};
