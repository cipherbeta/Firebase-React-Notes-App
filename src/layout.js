import React from 'react';

import AddBar from './components/common/addbar';
import NotesBar from './components/common/notesbar';
import NoteEditor from './components/common/editor';

const Layout = () => {
    return(
        <React.Fragment>
            <AddBar/>
            <NotesBar/>
            <NoteEditor/>
        </React.Fragment>
    );
}

export default Layout;