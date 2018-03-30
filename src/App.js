import React, { Component, PropTypes } from 'react';
import ListContacts from './ListConstacts'

class App extends Component {
  state = {
    contacts: [
      {
       "id": "ryan",
       "name": "Ryan Florence",
       "email": "ryan@reacttraining.com",
       "avatarURL": "http://localhost:5001/ryan.jpg"
      },
      {
       "id": "michael",
       "name": "Michael Jackson",
       "email": "michael@reacttraining.com",
       "avatarURL": "http://localhost:5001/michael.jpg"
      },
      {
       "id": "tyler",
       "name": "Tyler McGinnis",
       "email": "tyler@reacttraining.com",
       "avatarURL": "http://localhost:5001/tyler.jpg"
      }
    ]
  }
  removerContact = (contact) => {
    this.setState((state) => ({
      contacts: state.contacts.filter((c) => c.id !== contact.id)
    }))
  }
  render() {
    return (
      <div>
        <ListContacts 
          onDeleteContact={this.removerContact} 
          contacts={this.state.contacts} 
        />
      </div>
    )
  }
}

export default App;
