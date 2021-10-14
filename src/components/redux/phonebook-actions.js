import types from './phonebook-types';
import { v4 as uuidv4 } from 'uuid';

const addContact = (name, number) => ({
  type: types.ADD,
  payload: {
    id: uuidv4(),
    name,
    number,
  },
});

const deleteContact = id => ({
  type: types.DELETE,
  payload: id,
});

const find = contact => ({
  type: types.FIND,
  payload: contact,
});

const filter = value => ({
  type: types.FILTER,
  payload: value,
});

export { addContact, deleteContact, find, filter };
