import React from 'react';
import { Layout, List, Typography } from 'antd';
import styled from 'styled-components';


const Pointer = styled.span`
  cursor: pointer;
`;

const NoteList = (props) => {
  const { noteData, setCurNote } = props;

  return <div className="NoteList">
    <Layout>
      <List
        header={<div><h1>Notes</h1></div>}
        bordered
        dataSource={noteData}
        renderItem={(note, idx) => (
          <List.Item key={note.id}>
            <Typography.Text mark>{idx}、</Typography.Text> <Pointer onClick={() => setCurNote(note)}>{note.content}</Pointer>
          </List.Item>
        )}
      />
    </Layout>
  </div>
};

export default NoteList;