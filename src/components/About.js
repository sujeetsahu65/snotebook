import React, { useContext, useEffect } from 'react';
import NoteContext from '../context/notes/NoteContext';

function About() {
let cntx = useContext(NoteContext);

useEffect(()=>{
    cntx.refresh();
    // react-hooks/exhaustive-deps
},[])

  return (
   <>
  {/* My Name Is {cntx.state.name} */}
   
   
   </>
  )
}

export default About