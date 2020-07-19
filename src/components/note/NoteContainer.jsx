import React, {Fragment, useContext, useEffect} from 'react';

import { Loader } from './components/Loader.jsx';
import Notes from './pages/Notes';
import { FirebaseContext } from '../../context/firebase/firebaseContext';
import { Form } from './components/Form.jsx';

 const NoteContainer = () => {
  const {loading, notes, fetchNotes, removeNote} = useContext(FirebaseContext)

  useEffect( () => {
    fetchNotes()
    // eslint-disable-next-line
  }, [])

  return(
    <Fragment>
      <Form/>

      <hr/>
      {loading
        ?<Loader/>
        :<Notes notes={notes} onRemove={removeNote}/>
      }
    </Fragment>
  )
}

export default NoteContainer
