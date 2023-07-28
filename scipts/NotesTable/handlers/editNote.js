import { createNoteEditRow, createNoteEditForm } from "../createNoteEditRow.js";
import {
    notesTableId,
    setNotes,
    updateNotesTable,
} from "../../init/initTables.js";
import Note from "../../../models/Note.js";

export function handleEditClick(e, note, notes, editFormId) {
    const row = e.target.closest("tr");
    const form = document.querySelector(`#${editFormId}`);

    const editRow = createNoteEditRow(note, notes);
    const newForm = createNoteEditForm(note, notes);
    newForm.id = editFormId;

    row.replaceWith(editRow);
    form.replaceWith(newForm);

    toggleActionButtons(notesTableId);
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
            form.content.value,
            oldNote.isArchived
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

function toggleActionButtons(tableId) {
    const table = document.querySelector(`#${tableId}`);
    const actionButtons = table.querySelectorAll(
        "button:not([data-note-edit-action])"
    );

    for (const button of actionButtons) {
        button.disabled = !button.disabled;
    }
}
