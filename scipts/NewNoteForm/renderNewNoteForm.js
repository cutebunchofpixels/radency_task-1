import createNewNoteForm from "./createNewNoteForm.js";

export default function renderNewNoteForm(formId, notes) {
    const form = document.querySelector(`#${formId}`);

    const newForm = createNewNoteForm(formId, notes);

    form.replaceWith(newForm);
}
