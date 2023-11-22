import { Component } from 'react';
import { GlobalStyle } from '../GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import { nanoid } from 'nanoid';
import initialItems from '../components/Items/items.json';

const LC_KEY = 'contact';

export class App extends Component {
  state = {
    contacts: initialItems,
    filter: '',
  };

  componentDidMount() {
    const saveContact = window.localStorage.getItem(LC_KEY);
    const parsedContact = JSON.parse(saveContact);
    if (parsedContact) {
      this.setState({
        contacts: parsedContact,
      });
    }
  }

  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;
    const addLC = prevState.contacts !== contacts;
    if (addLC) {
      window.localStorage.setItem(LC_KEY, JSON.stringify(contacts));
    }
  }

  updateFilter = newFilter => {
    this.setState({
      filter: newFilter,
    });
  };

  addContact = newContact => {
    const add = {
      ...newContact,
      id: nanoid(),
    };
    const { contacts } = this.state;
    const checkContact = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (checkContact) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      this.setState(prevState => {
        return {
          contacts: [...prevState.contacts, add],
        };
      });
    }
  };

  deleteContact = itemId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(item => item.id !== itemId),
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;

    const visibleContacts = contacts.filter(item => {
      const hasFilter = item.name.toLowerCase().includes(filter.toLowerCase());
      return hasFilter;
    });
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAdd={this.addContact} />

        <h2>Contacts</h2>
        <Filter filter={filter} onUpdateFilter={this.updateFilter} />
        {visibleContacts.length > 0 && (
          <ContactList items={visibleContacts} onDelete={this.deleteContact} />
        )}
        <GlobalStyle />
      </div>
    );
  }
}
