import React,{useContext,useState} from 'react'
import NoteContext from '../context/notes/NoteContext';
function AddNote() {


     const cntx = useContext(NoteContext);
const {addNote} = cntx;

const [note, setNote] = useState({title:"",descrip:""});
const onClick = (e)=>{
    e.preventDefault();
     addNote(note);
}

const onChange =(e)=>{
setNote({...note,[e.target.name]:e.target.value});
}
  return (
   <>
   <div className="container">

   <h1>Add A Note</h1>
<div className="mb-3"> 
  <label htmlFor="title" className="form-label">Title</label>
  <input type="text" className="form-control" id="title" placeholder=""  name='title' onChange={onChange}/>
</div>
<div className="mb-3">
  <label htmlFor="descrip" className="form-label">Description</label>
  <textarea className="form-control" id="descrip" rows="3" name='descrip' onChange={onChange}></textarea>
</div>
<div className="col-6">
<button type="button" className="btn btn-primary" onClick={onClick}>Submit</button>

</div>
   </div>


   </>
  )
}

export default AddNote