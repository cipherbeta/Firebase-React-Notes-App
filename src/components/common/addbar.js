import React from 'react';
import {database} from '../../firebase/config';

const AddBar = () => {
    let AddNewPost = () => {
        database.ref('notes/').push({
            title: "New Note",
            tags: null,
            content: null
        });
        console.log("added")
    }
    return(
        <aside id="addbar_wrapper">
            <i className="fas fa-plus-circle" onClick={()=>AddNewPost()}/>
            <i className="fas fa-minus-circle"/>
        </aside>
    );
}

export default AddBar;