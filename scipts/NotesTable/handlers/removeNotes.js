import { setNotes } from "../../init/initTables.js";

export function handleRemoveNote(noteId, notes) {
    const newNotes = notes.filter((note) => note.id !== noteId);
    setNotes(newNotes);
}

export function handleRemoveAllNotes() {
    setNotes([]);
}
