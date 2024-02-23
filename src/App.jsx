import { useState } from "react";
import ContactList from "./components/ContactList.jsx";
import "./App.css";
import SelectedContact from "./components/SelectedContact.jsx";

// const [contacts, setContacts] = useState(dummyContacts)
function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  const [contact, setContact] = useState(null);
  return (
    <>
      <div>
        {selectedContactId ? (
          <div>
            <table>
              <thead>
                <tr>
                  <th colSpan="3">Selected Contact View</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>Email</td>
                  <td>Phone</td>
                </tr>
                <tr>
                  <td>{}</td>
                  <td>{}</td>
                  <td>{}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <ContactList setSelectedContactId={setSelectedContactId} />
        )}
        {
          <SelectedContact
            selectedContactId={selectedContactId}
            setSelectedContactId={setSelectedContactId}
            setContact={setContact}
          />
        }
      </div>
    </>
  );
}

export default App;
