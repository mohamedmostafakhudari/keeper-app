import React from "react";
import Note from "./Note";

const Notes = ({ notes, onDeleteNote }) => {
	return (
		<div className="flex flex-wrap items-start gap-6 mt-8">
			{notes.map(({ id, title, content }) => (
				<Note
					key={id}
					title={title}
					content={content}
					onDeleteNote={() => onDeleteNote(id)}
				/>
			))}
		</div>
	);
};

export default Notes;
