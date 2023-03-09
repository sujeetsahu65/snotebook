import { useState } from 'react';
import NoteContext from './NoteContext';

// we will provide NoteContext all of our states which we can draw from any conponents by importing useContext

const NoteState = (props) =>
{
  let endpoint = "http://localhost:5000";

  const [notes, setNote] = useState([])

  // let url = `http://localhost:5000/api/notes/updatenotes/${id}`;

  const getNotes = async () =>
  {

    let url = `${endpoint}/api/notes/fetchnotes`;
    let notesData = await fetch(url, {
      // Adding method type---
      method: "GET",

      // body: JSON.stringify({
      //   title: "foo",
      //   body: "bar",
      //   userId: 1,
      // }),
      headers: {
        "Content-type": "X-Requested-With,content-type",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmMjBjOWZiMjVlMmRkMTAyMzcwZjk3In0sImlhdCI6MTY3NjgwNzQyN30.72NuvG224FZJeid0VT74eNGj7zEBtmArsbL6soLAHyM"
      }
    });

    let json = await notesData.json();
    // let parseNote = await JSON.parse(json).notes
    // let res = updatePoint.then((res)=>res.json()).then((data)=>console.log(data.notes));
    // console.log(JSON.parse(json).notes);
    // console.log(json.notes);
    setNote(json.notes);

  }


  // const refresh = ()=>{

  // setTimeout(() => {
  //     setState({"name":"ved","class":"3rd"});
  // }, 2000);

  // }


  /*
  {state, refresh} is an object where the value of state is state and refresh's refresh(kind of destructuring)
  */

  // Adding A Note====
  const addNote = async (newNote) =>
  {
    // await setNote(note.push(newNote));
    // console.log(note);
    // setNote(notes.concat(newNote));

    // let body = notes;
    // let url = "http://localhost:5000/api/notes/createnotes";
    // fetch(url,body).then((res)=>console.log(res.json()));

    let url = `${endpoint}/api/notes/createnotes`;
    let isSaved = await fetch(url, {
      // Adding method type---
      method: "POST",

      body: JSON.stringify(newNote),
      headers: {
        "Content-type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmMjBjOWZiMjVlMmRkMTAyMzcwZjk3In0sImlhdCI6MTY3NjgwNzQyN30.72NuvG224FZJeid0VT74eNGj7zEBtmArsbL6soLAHyM"
      }
    });
    // console.log(await notesData.json());
    //  console.log(await notesData.json());
    // console.log(notesData.status);
    if (isSaved.status === 200)
    {
      // console.log(notesData.status);
      getNotes();
    }

  }

  // Editing A Note====
  const editNote = async (note) =>
  {
    // await setNote(notes.concat(newNote));
    // setMode("add");
    let url = `${endpoint}/api/notes/updatenotes/${note._id}`;
    let isUpdated = await fetch(url, {
      // Adding method type---
      method: "PUT",
      body: JSON.stringify(note),
      headers: {
        "Content-type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmMjBjOWZiMjVlMmRkMTAyMzcwZjk3In0sImlhdCI6MTY3NjgwNzQyN30.72NuvG224FZJeid0VT74eNGj7zEBtmArsbL6soLAHyM"
      }
    });


    if (isUpdated.status === 200)
    {
      getNotes();
    }


  }

  // Deleting A Note====
  const deleteNote = async (id) =>
  {
    // console.log("the delete note id is:"+id);
    // setNote(notes.filter((el)=>{return el._id !==id})); 

    let url = `${endpoint}/api/notes/deletenotes/${id}`;
    let isDeleted = await fetch(url, {
      // Adding method type---
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmMjBjOWZiMjVlMmRkMTAyMzcwZjk3In0sImlhdCI6MTY3NjgwNzQyN30.72NuvG224FZJeid0VT74eNGj7zEBtmArsbL6soLAHyM"
      }
    });


    if (isDeleted.status === 200)
    {
      getNotes();
    }

  }

  return <>
    <NoteContext.Provider value={{ notes, setNote, addNote, editNote, deleteNote, getNotes }}>
      {/* the values cant be comma separated you know, you need to pass one single entity thus we provided object */}
      {props.children}
    </NoteContext.Provider>

  </>


}


export default NoteState;