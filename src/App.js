import React, { useEffect, useState } from 'react';
import './App.css';
import NoteList from './components/NoteList';
import Detail from './components/Detail';
import NewNote from './components/NewNote';
import axios from 'axios';
import { Button } from 'antd';
import styled from 'styled-components';

const NOTELIST = 'NOTELIST';
const NOTEDETAIL = 'NOTEDETAIL';
const NEWNOTE = 'NEWNOTE';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [curNote, setCurNote] = useState(null);

  const [curState, setCurState] = useState(NOTELIST);

  const getNotes = () => {
    axios.get('/notes').then((res) => {
      setNotes(res.data);
    });
  }

  useEffect(getNotes, []);

  const Container = (props) => {
    const H1 = styled.h1`
      display: flex;
      justify-content: space-between;
      align-items: baseline;
    `;

    return <div className="App">
      {
        curState === NOTELIST && <H1>
          <span>Notes</span>
          <Button type="danger" onClick={() => {
            setCurState(NEWNOTE);
          }}>new</Button>
        </H1>
      }
      {props.children}
    </div>
  }

  if (curState === NOTELIST) {
    return <Container>
      <NoteList
        noteData={notes}
        getNotes={getNotes}
        viewNote={(note) => {
          setCurNote(note);
          setCurState(NOTEDETAIL);
        }}></NoteList>
    </Container>
  } else if (curState === NOTEDETAIL) {
    return <Container>
      <Detail
        note={curNote}
        backToList={() => {
          setCurNote(null);
          setCurState(NOTELIST);
        }}
        backToListAndGetNotes={() => {
          setCurState(NOTELIST);
          getNotes();
        }}
      ></Detail>
    </Container>
  } else if (curState === NEWNOTE) {
    return <Container>
      <NewNote
        backToList={() => {
          setCurState(NOTELIST);
        }}
        backToListAndGetNotes={() => {
          setCurState(NOTELIST);
          getNotes();
        }}
      ></NewNote>
    </Container>
  }
};

export default App;
