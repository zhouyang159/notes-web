import React, { useState } from 'react';
import { Card, Input, Button } from 'antd';
import styled from 'styled-components';

const { TextArea } = Input;

const Footer = styled.div`
	margin: 10px 0;
	display: flex;
	justify-content: space-between;
`;

const Detail = (props) => {
	const { backToNoteList } = props;
	const [note, setNote] = useState(props.note);


	return <div className="Detail">
		<Card title={note.id}>
			<TextArea rows={7} value={note.content} onChange={(e) => {
				setNote({
					...note,
					content: e.target.value,
				});
			}}></TextArea>
			<Footer>
				<Button onClick={() => backToNoteList(note)}>back</Button>
				<Button type="danger">Save</Button>
			</Footer>
		</Card>
	</div>
};

export default Detail;