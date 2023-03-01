import { useEffect, useState } from 'react';
import NoteContext from './NoteContext';

// we will provide NoteContext all of our states which we can draw from any conponents by importing useContext

const NoteState = (props)=>{

const note = 
   [
    {
      "_id": "63f2471f6891aa6d395e3daf5",
      "user": "63f20c9fb25e2dd102370f97",
      "title": "Monday Task",
      "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum cumque dicta at provident quisquam voluptatem. Suscipit cupiditate labore veniam quaerat enim deleniti, sint est molestias id maiores ex! Facilis, molestiae.",
      "tag": "Important",
      "date": "2023-02-19T15:58:23.450Z",
      "__v": 0
    },
    {
      "_id": "63f2471f6891aa6d395e3daf4",
      "user": "63f20c9fb25e2dd102370f97",
      "title": "Monday Task",
      "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum cumque dicta at provident quisquam voluptatem. Suscipit cupiditate labore veniam quaerat enim deleniti, sint est molestias id maiores ex! Facilis, molestiae.",
      "tag": "Important",
      "date": "2023-02-19T15:58:23.450Z",
      "__v": 0
    },
    {
      "_id": "63f2471f6891aa6d395e3daf3",
      "user": "63f20c9fb25e2dd102370f97",
      "title": "Monday Task",
      "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum cumque dicta at provident quisquam voluptatem. Suscipit cupiditate labore veniam quaerat enim deleniti, sint est molestias id maiores ex! Facilis, molestiae.",
      "tag": "Important",
      "date": "2023-02-19T15:58:23.450Z",
      "__v": 0
    },
    {
      "_id": "63f2471f6891aa6d395e3daf2",
      "user": "63f20c9fb25e2dd102370f97",
      "title": "Monday Task",
      "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum cumque dicta at provident quisquam voluptatem. Suscipit cupiditate labore veniam quaerat enim deleniti, sint est molestias id maiores ex! Facilis, molestiae.",
      "tag": "Important",
      "date": "2023-02-19T15:58:23.450Z",
      "__v": 0
    },
    {
      "_id": "63f2471f6891aa6d395e3daf1",
      "user": "63f20c9fb25e2dd102370f97",
      "title": "Monday Task",
      "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum cumque dicta at provident quisquam voluptatem. Suscipit cupiditate labore veniam quaerat enim deleniti, sint est molestias id maiores ex! Facilis, molestiae.",
      "tag": "Important",
      "date": "2023-02-19T15:58:23.450Z",
      "__v": 0
    }
  ];


const [notes, setNote] = useState(note)

// const refresh = ()=>{

// setTimeout(() => {
//     setState({"name":"ved","class":"3rd"});
// }, 2000);

// }


/*
{state, refresh} is an object where the value of state is state and refresh's refresh(kind of destructuring)
*/

// Adding A Note====
const addNote = async(newNote)=>{
// await setNote(note.push(newNote));
await setNote(notes.concat(newNote));

let body = notes;
    // let url = "http://localhost:5000/api/notes/createnotes";
    // fetch(url,body).then((res)=>console.log(res.json()));
}

useEffect(()=>{
    console.log(notes)
})

// Editing A Note====
const editNote =(id)=>{
    
}

// Deleting A Note====
const deleteNote =(id)=>{
    
}

return <>
        <NoteContext.Provider value={{notes,setNote,addNote,editNote,deleteNote}}>
            {/* the values cant be comma separated you know, you need to pass one single entity thus we provided object */}
            {props.children}
        </NoteContext.Provider>

        </>


}


export default NoteState;