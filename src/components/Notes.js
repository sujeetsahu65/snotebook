import React, { useContext, useEffect, useRef, useState } from 'react';

import NoteContext from '../context/notes/NoteContext';
import Noteitem from './Noteitem';
import AddNote from './AddNote';
function Notes ()
{
  const cntx = useContext(NoteContext);
  const { notes, getNotes, editNote } = cntx;
  const [eNote, setENote] = useState({ title: "", description: "", tag: "" });
const refModal = useRef(null);
const refClose = useRef(null);

  useEffect(() =>
  {
    getNotes()
  }, [])
  // it is important to use useeffect when you are calling any function by default else thing will go into endless loop

  

  const onEdit = (note) =>
  {
    // console.log('lksjl');
    setENote(note);
    refModal.current.click();
  }

  const onChange = (e) =>
  {
    setENote({ ...eNote, [e.target.name]: e.target.value });

  }

  const onSubmit = (e) =>
  {
    // e.preventDefault();
    editNote(eNote);
    refClose.current.click();

  }


  return (
    <>
      <div className="row">
        <AddNote></AddNote>

        {notes.length ?
          notes.map((note) =>
          {
            // console.log(note._id);
            return <Noteitem note={note} key={note._id} onEdit={onEdit}></Noteitem>
          }) : ""

        }


        <button ref={refModal} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" hidden>
        </button>


        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form>

                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" placeholder="" name='title' onChange={onChange} value={eNote.title} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control" id="description" rows="3" name='description' onChange={onChange} value={eNote.description}></textarea>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Title</label>
                    <input type="tag" className="form-control" id="tag" placeholder="" name='tag' onChange={onChange} value={eNote.tag} />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={refClose}>Close</button>

                <button type="button" className="btn btn-primary" onClick={onSubmit}>Update</button>

              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Notes