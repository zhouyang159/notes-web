import React, { useState } from 'react';
import { Card, Input, Button, message } from 'antd';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const { TextArea } = Input;

const Footer = styled.div`
	margin: 10px 0;
	display: flex;
	justify-content: space-between;
`;

const NewNote = (props) => {
    const { backToList, backToListAndGetNotes } = props;
	const [note, setNote] = useState({
        id: uuidv4(),
        content: '',
    });

    const handleSave = () => {
        console.log('save note');

        axios.post('/notes', note).then((res) => {
            console.log(res.data);
            if (res.data) {
                message.success('add a note successfully');
                backToListAndGetNotes();
            }
        });
    }


	return <div className="NewNote">
		<Card title={note.id}>
			<TextArea rows={7} value={note.content} onChange={(e) => {
				setNote({
					...note,
					content: e.target.value,
				});
			}}></TextArea>
			<Footer>
				<Button onClick={backToList}>back</Button>
				<Button type="danger" onClick={handleSave} disabled={note.content.trim() === ''}>Save</Button>
			</Footer>
		</Card>
	</div>
};

export default NewNote;