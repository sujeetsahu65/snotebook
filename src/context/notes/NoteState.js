import { useState } from 'react';
import NoteContext from './NoteContext';

// we will provide NoteContext all of our states which we can draw from any conponents by importing useContext

const NoteState = (props)=>{

const myobj = {
    "name":"sujeet",
    "class":"5th"
}


const [state, setState] = useState(myobj)

const refresh = ()=>{

setTimeout(() => {
    setState({"name":"ved","class":"3rd"});
}, 2000);

}


/*
{state, refresh} is an object where the value of state is state and refresh's refresh(kind of destructuring)
*/
return <>
        <NoteContext.Provider value={{state, refresh}}>
            {/* the values cant be comma separated you know, you need to pass one single entity thus we provided object */}
            {props.children}
        </NoteContext.Provider>

        </>


}


export default NoteState;