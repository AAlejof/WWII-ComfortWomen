import React, { useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import {
	getAllContact,
	putContact,
	deleteContact,
} from '../../../redux/actions/actions';

const ContactMessages = () => {

  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contact); // Assuming you have a "contacts" state in your Redux store

  useEffect(() => {
    dispatch(getAllContact()); // Dispatch the action to fetch contacts when the component mounts
  }, [dispatch]);

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id)); // Dispatch the action to delete a contact
  };

  return (
    <div>
      <h1>Contact Messages</h1>
      <table>
        <thead>
          <tr>
            <th>Author Name</th>
            <th>Tag</th>
            <th>Content</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact?.id}>
              <td>{contact?.author_name}</td>
              <td>{contact?.tag}</td>
              <td>{contact?.content}</td>
              <td>{contact?.mail}</td>
              <td>
                <button onClick={() => handleDeleteContact(contact.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContactMessages;
