import React from 'react';
import { Link } from 'react-router-dom';

function Noteitem (props)
{

    const { note } = props;
    // console.log(note._id);
    // console.log(note.description);
    return (
        <>

            <div className="card col-3 my-2 mx-2" style={{ "width": "18rem" }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <div className="row">
                        <div className='col-6'>
                            <Link to="/" className="btn btn-primary">Go somewhere</Link>

                        </div>

                        <div className='col-6 row'>
                            <div className='col-6'>
                                <button><i className="fa-solid fa-pen-to-square"></i></button>
                                
                            </div>
                            <div className='col-6'>
                                <button><i className="fa-solid fa-trash"></i></button>
                                
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}

export default Noteitem