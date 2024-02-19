import React, { useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import {
	getAllContact,
	deleteContact,
} from '../../../../redux/actions/actions';
import swal from 'sweetalert';
import style from './PublicationsList.module.css'

const PublicationsList = () => {

  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contact); 

  useEffect(() => {
    dispatch(getAllContact()); // Dispatch the action to fetch contacts when the component mounts
  }, [dispatch]);

  const handleDeleteContact = async (id) => {
    
    swal({
			title: "Querés borrar esta publicación?",
			text: "Si es así, click en Ok",
			icon: "warning",
			buttons: true,
			dangerMode: true,
		}).then((result) => {
			if (result) {
				dispatch(deleteContact(id)); // Dispatch the action to delete a contact
				swal({
					title: "Publicación borrada!",
					icon: "success",
				});
			} else {
				swal("Descartado", "", "info");
			}
		});
  };

  function formatCreatedAt(createdAt) {
    const date = new Date(createdAt);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString().slice(2);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
  
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  }
  

  return (
    <div className={style.publicationsDiv}>
      <h1>Publicaciones</h1>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Autor</th>
            <th>Contenido</th>
            <th>Temas</th>
            <th>Fecha</th>
            <th>Editar</th>
            <th>Borrar</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact?.id}>
              <td>{contact?.author_name}</td>
              <td>{contact?.tag}</td>
              <td>{contact?.content}</td>
              <td>{contact?.mail}</td>
              <td>{formatCreatedAt(contact.createdAt)}</td>
              <td className={style.tableButton}>
                <button>✎</button>
              </td>
              <td className={style.tableButton}>
                <button onClick={() => handleDeleteContact(contact.id)}>
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PublicationsList;