import React,{ useContext,useEffect, useRef } from 'react';

import NoteContext from '../context/notes/NoteContext';
import Noteitem from './Noteitem';
import AddNote from './AddNote';
function Notes() {
    const cntx = useContext(NoteContext);
const {notes,getNotes} = cntx;

  useEffect(() => {
 getNotes()
  }, [])
  // it is important to use useeffect when you are calling any function by default else thing will go into endless loop

  const ref = useRef(null);

  const updateNote = (note)=>{
    console.log('lksjl');
ref.current.click();
  }


  return (
<>
<div className="row">
<AddNote></AddNote>

 { notes.length ?
   notes.map((note)=>{
  // console.log(note._id);
return <Noteitem note={note} key={note._id} updateNote={updateNote}></Noteitem>
      }):""
 
 }


<button ref={ref} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" hidden>
  Launch demo modal
</button>


<div className="modal fade" id="exampleModal" tabIndex="-1"  aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

</div>
</>
  )
}

export default Notes