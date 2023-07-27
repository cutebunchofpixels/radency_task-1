import Note from "../../../models/Note.js";
import { setNotes } from "../../init/initTables.js";

export function handleArchiveNote(noteId, notes) {
    const newNotes = notes.map((note) => {
        if (note.id !== noteId) {
            return note;
        }

        const newNote = new Note(
            note.id,
            note.name,
            note.creationDate,
            note.category,
            note.content,
            !note.isArchived
        );

        return newNote;
    });

    setNotes(newNotes);
}

export function handleArchiveAllNotes(notes) {
    const newNotes = notes.map((note) => {
        const newNote = new Note(
            note.id,
            note.name,
            note.creationDate,
            note.category,
            note.content,
            !note.isArchived
        );

        return newNote;
    });

    setNotes(newNotes);
}
