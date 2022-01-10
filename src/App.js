import React, { useState } from 'react';
import './App.css';
import NoteList from './components/NoteList';
import Detail from './components/Detail';

let tempData = [
  {
    id: "random111",
    content: "Japanese princess to wed commoner.",
  },
  {
    id: "random222",
    content: "Australian walks 100km after outback crash.",
  },
  {
    id: "random333",
    content: "Man charged over missing wedding girl.",
  },
  {
    id: "random444",
    content: "Los Angeles battles huge wildfires.",
  },
];


const App = () => {
  const [curNote, setCurNote] = useState(null);

  return <div className="App">
    {
      !curNote ?
        <NoteList noteData={tempData} setCurNote={setCurNote}></NoteList> :
        <Detail
          note={curNote} 
          backToNoteList={(newNote) => {
            tempData = tempData.map((item) => {
              if (item.id === newNote.id) {
                return {
                  ...item,
                  content: newNote.content,
                }
              }
              return item;
            });

            setCurNote(null)
          }}
        ></Detail>
    }
  </div>
};

export default App;
