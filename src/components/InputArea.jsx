import React from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import animations from "../animations.module.css";

const InputArea = ({ onAddNote }) => {
	const [expanded, setExpanded] = React.useState(false);
	const [noteBody, setNoteBody] = React.useState({
		"note-title": "",
		"note-content": "",
	});
	function handleChange(e) {
		const { name, value } = e.target;
		const newNoteBody = {
			...noteBody,
			[name]: value,
		};
		setNoteBody(newNoteBody);
	}

	return (
		<div className="flex justify-center">
			{expanded ? (
				<form
					action="/"
					onSubmit={(e) => {
						e.preventDefault();
						onAddNote(noteBody);
						setNoteBody({
							"note-title": "",
							"note-content": "",
						});
					}}
					className="flex flex-col relative rounded-md p-2 bg-white shadow-md shadow-black/30">
					<input
						type="text"
						name="note-title"
						id="note-title"
						value={noteBody["note-title"]}
						onChange={handleChange}
						placeholder="Title"
						className="bg-transparent py-1 px-4 appearance-none hover:outline-none focus:outline-none"
					/>
					<textarea
						name="note-content"
						id="note-content"
						value={noteBody["note-content"]}
						onChange={handleChange}
						placeholder="Take a Note..."
						className="resize-none bg-transparent px-4 min-w-[36ch] h-20 appearance-none hover:outline-none focus:outline-none"></textarea>
					<button
						className={`absolute top-full -translate-y-1/2 right-6 w-9 aspect-square rounded-full block bg-yellow-500 text-white text-xs font-bold duration-200 ease-in-out hover:bg-yellow-600 ${animations.zoom}`}>
						<AddIcon />
					</button>
				</form>
			) : (
				<div
					onClick={() => setExpanded(true)}
					className="min-w-[36ch] shadow-md shadow-black/30 rounded-md bg-white ">
					<p className="p-4">Take a note...</p>
				</div>
			)}
		</div>
	);
};

export default InputArea;
