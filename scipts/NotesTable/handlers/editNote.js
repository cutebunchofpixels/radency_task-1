import { createNoteEditRow, createNoteEditForm } from "../createNoteEditRow.js";
import {
    notesTableId,
    setNotes,
    updateNotesTable,
} from "../../init/initTables.js";
import Note from "../../../models/Note.js";

export function handleEditClick(e, note, notes) {
    const row = e.target.closest("tr");
    const table = e.target.closest("table");

    const editRow = createNoteEditRow(note, notes);
    const editForm = createNoteEditForm(note, notes);

    row.replaceWith(editRow);
    table.insertAdjacentElement("beforebegin", editForm);

    toggleEditButtons(notesTableId);
}

export function handleDiscardClick() {
    updateNotesTable();
}

export function handleSubmitEditForm(e, oldNote, notes) {
    e.preventDefault();
    const form = e.target;

    try {
        const newNote = new Note(
            oldNote.id,
            form.noteName.value,
            oldNote.creationDate,
            form.category.value,
            form.content.value
        );

        const newNotes = notes.map((note) => {
            if (note.id === oldNote.id) {
                return newNote;
            }

            return note;
        });

        setNotes(newNotes);
    } catch (error) {
        alert(error.message);
    }
}

function toggleEditButtons(tableId) {
    const table = document.querySelector(`#${tableId}`);
    const editButtons = table.querySelectorAll("[data-edit-note-button]");

    for (const button of editButtons) {
        button.disabled = !button.disabled;
    }
}
