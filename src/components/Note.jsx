import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const Note = ({ title, content, onDeleteNote }) => {
	return (
		<div className="basis-auto w-[26ch] flex-auto sm:flex-grow-0 shadow-lg shadow-black/20 ring-2 ring-zinc-300/50 rounded-md bg-white p-4 pb-0">
			<h2 className="font-bold">{title}</h2>
			<p className="break-words">{content}</p>
			<button
				onClick={onDeleteNote}
				className="w-fit block ml-auto py-4 px-4 -mr-4 text-yellow-500 duration-200 ease-in-out hover:text-yellow-600">
				<DeleteIcon />
			</button>
		</div>
	);
};

export default Note;
