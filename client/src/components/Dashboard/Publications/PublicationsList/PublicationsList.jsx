import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBlog, getAllPosts } from '../../../../redux/actions/actions';
import swal from 'sweetalert';
import style from './PublicationsList.module.css'

const PublicationsList = () => {

  const dispatch = useDispatch();
  // const posts = useSelector((state) => state.post);
  const initial_posts  = useSelector((state) => state.initial_posts);

	useEffect(() => {
		dispatch(getAllPosts());

	}, []);

  const handleDeleteBlog = async (id) => {

    swal({
      title: "Querés borrar esta publicación?",
      text: "Si es así, click en Ok",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((result) => {
      if (result) {
        dispatch(deleteBlog(id)); // Dispatch the action to delete a contact
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
          {initial_posts && initial_posts.length > 0 ? (
          initial_posts?.map((post) => (
            <tr key={post?.id}>
              <td>{post?.title}</td>
              <td>{post?.author_name}</td>
              <td>ver</td>
              <td>{post?.tag}</td>
              <td>{formatCreatedAt(post?.createdAt)}</td>
              <td className={style.tableButton}>
                <button>✎</button>
              </td>
              <td className={style.tableButton}>
                <button onClick={() => handleDeleteBlog(post?.id)}>
                  X
                </button>
              </td>
            </tr>
          ))
          ) : (
            <tr>
              <td colSpan="7">No hay publicaciones disponibles</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default PublicationsList;