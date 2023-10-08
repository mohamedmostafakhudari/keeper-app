import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "./components/Container";
import Notes from "./components/Notes";
import initialNotes from "./notes";
import InputArea from "./components/InputArea";

function App() {
	const [notes, setNotes] = React.useState(initialNotes);
	const patternUrl = new URL("./assets/always-grey.png", import.meta.url).href;
	console.log(patternUrl);

	function handleAddNote(noteBody) {
		const newNote = {
			id: crypto.randomUUID(),
			title: noteBody["note-title"],
			content: noteBody["note-content"],
		};
		setNotes((prev) => [...prev, newNote]);
	}
	function handleDeleteNote(id) {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	}
	return (
		<>
			<div className="min-h-screen relative flex flex-col font-body">
				<div
					style={{ "--pattern-url": `url(${patternUrl})` }}
					className={`absolute inset-0 -z-10 bg-[image:var(--pattern-url)] bg-repeat`}></div>
				<Header />
				<Container className={`flex-1 mt-4`}>
					<InputArea onAddNote={handleAddNote} />
					<Notes notes={notes} onDeleteNote={handleDeleteNote} />
				</Container>
				<Footer />
			</div>
		</>
	);
}

export default App;
