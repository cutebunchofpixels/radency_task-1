import Note from "../../../models/Note.js";
import generateNoteId from "../../utils/generateNoteId.js";
import { setNotes } from "../../init/initTables.js";

export function handleNewNoteFormSubmit(e, notes) {
    e.preventDefault();
    const form = e.target;

    try {
        const newNote = new Note(
            generateNoteId(notes),
            form.noteName.value,
            new Date(),
            form.category.value,
            form.content.value,
            false
        );

        const newNotes = [newNote, ...notes];

        console.log(newNote);

        setNotes(newNotes);
    } catch (error) {
        alert(error.message);
    }
}
