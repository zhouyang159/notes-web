import React from 'react';
import { Button, Layout, List, message, Typography } from 'antd';
import styled from 'styled-components';
import axios from 'axios';


const Pointer = styled.span`
  cursor: pointer;
`;

const ListItemLine = styled(List.Item)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  :hover {
    .delete_btn {
      visibility: visible !important;
    }
  }
`;

const NoteList = (props) => {
  const { noteData, getNotes, viewNote } = props;

  const handleDelete = (note) => {
    axios.delete(`/notes?id=${note.id}`).then((res) => {
      if (res.data) {
        message.success('delete note successfully');
        getNotes();
      }
    });
  }

  return <div className="NoteList">
    <Layout>
      <List
        header={<div><h1>Notes</h1></div>}
        bordered
        dataSource={noteData}
        renderItem={(note, idx) => (
            <ListItemLine key={note.id}>
              <div>
                <Typography.Text mark>{idx}、</Typography.Text> <Pointer onClick={() => viewNote(note)}>{note.content}</Pointer>
              </div>
              <Button className='delete_btn' style={{ visibility: 'hidden' }} size='small' type='danger' onClick={() => {
                handleDelete(note);
              }}>delete</Button>
            </ListItemLine>
        )}
      />
    </Layout>
  </div>
};

export default NoteList;