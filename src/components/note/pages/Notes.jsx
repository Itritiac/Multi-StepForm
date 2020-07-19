import React from 'react';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

 const Notes = ({ notes, onRemove }) => {

  return (

    <TransitionGroup component="ul" className="list-group">
      {notes.map(note => (
        <CSSTransition
          key={note.id}
          classNames={'note'}
          timeout={800}
        >
          <li className="list-group-item note">
            <div>
              <strong>{note.title}</strong>
              {/* <span>{note.date}</span> */}
              <span>{new Date().toLocaleDateString()}</span>
            </div>
            <button
              type="button"
              className="btn btn-outline-danger btn-sm"
              onClick={() => onRemove(note.id)}
            >&times;
          </button>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  )
}

export default Notes