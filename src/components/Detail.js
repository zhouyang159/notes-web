import React, { useState } from 'react';
import { Card, Input, Button, message } from 'antd';
import styled from 'styled-components';
import axios from 'axios';

const { TextArea } = Input;

const Footer = styled.div`
	margin: 10px 0;
	display: flex;
	justify-content: space-between;
`;

const Detail = (props) => {
	const { backToList, backToListAndGetNotes } = props;
	const [note, setNote] = useState(props.note);

	const handleUpdateNote = () => {
		axios.put('/notes', note).then((res) => {
			if (res.data) {
				message.success('update note successfully');
				backToListAndGetNotes();
			}
		});
	}


	return <div className="Detail">
		<Card title={note.id}>
			<TextArea rows={7} value={note.content} onChange={(e) => {
				setNote({
					...note,
					content: e.target.value,
				});
			}}></TextArea>
			<Footer>
				<Button onClick={backToList}>back</Button>
				<Button type="danger" onClick={handleUpdateNote}>update</Button>
			</Footer>
		</Card>
	</div>
};

export default Detail;