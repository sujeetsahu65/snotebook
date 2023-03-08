import React,{useContext,useState} from 'react'
import NoteContext from '../context/notes/NoteContext';
const AddNote =()=> {


     const cntx = useContext(NoteContext);
const {editableNote,editNote,mode,addNote} = cntx;

const [note, setNote] = useState({title:"",description:"",tag:""});

const onSubmit = (e,mode)=>{
    // e.preventDefault();
    if(mode ==="edit"){
      editNote(note)
    }
    else{
      // console.log(note);
     addNote(note);

    }
    
}


const onChange =(e)=>{
setNote({...note,[e.target.name]:e.target.value});
// since we are setting title and description at different times so if we don't use spread operator we will end up setting only tilte or description to the note state thus with spread opertor we are copying the pre-state object and dynamically changing the new values
}
  return (
   <>
   <div className="container">

   <h1>Add A Note</h1>
<div className="mb-3"> 
  <label htmlFor="title" className="form-label">Title</label>
  <input type="text" className="form-control" id="title" placeholder=""  name='title' onChange={onChange} /*value={editableNote.title}*//>
</div>
<div className="mb-3">
  <label htmlFor="description" className="form-label">Description</label>
  <textarea className="form-control" id="description" rows="3" name='description' onChange={onChange} /*value={editableNote.description}*/></textarea>
</div>
<div className="mb-3"> 
  <label htmlFor="tag" className="form-label">Title</label>
  <input type="tag" className="form-control" id="tag" placeholder=""  name='tag' onChange={onChange} /*value={editableNote.title}*//>
</div>
<div className="col-6">
<button type="button" className="btn btn-primary" onClick={()=>{onSubmit(this,mode)}}>Submit</button>

</div>
   </div>


   </>
  )
}

export default AddNote