import React, { useEffect } from 'react';
import PublicationsList from './PublicationsList/PublicationsList';
import TextEditor from './TextEditor';
import swal from 'sweetalert';
import style from './Publications.module.css'

const Publications = () => {

    return (
        <>
            <PublicationsList />
            <TextEditor />
        </>
    )
}

export default Publications;