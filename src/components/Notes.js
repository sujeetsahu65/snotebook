import React,{ useContext } from 'react';

import NoteContext from '../context/notes/NoteContext';
import Noteitem from './Noteitem';
import AddNote from './AddNote';
function Notes() {
    const cntx = useContext(NoteContext);
const {notes,setNote,addNote,editNote,deleteNote} = cntx;
  return (
<>
<div className="row">
<AddNote></AddNote>
 {notes.map((note)=>{
return <Noteitem note={note} key={note._id}></Noteitem>
      })}

</div>
</>
  )
}

export default Notes