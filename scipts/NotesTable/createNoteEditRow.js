import createCategorySelect from "../utils/createCategorySelect.js";
import createIcon from "../utils/createIcon.js";
import { handleDiscardClick } from "./handlers/editNote.js";
import { handleSubmitEditForm } from "./handlers/editNote.js";

export function createNoteEditRow(note, notes) {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    const nameTextarea = document.createElement("textarea");
    nameTextarea.required = true;
    nameTextarea.value = note.name;
    nameTextarea.name = "noteName";
    nameTextarea.setAttribute("form", "edit-note-form");
    nameTextarea.classList.add("form-control");
    nameCell.append(nameTextarea);

    const createdAt = document.createElement("td");
    createdAt.innerText = note.creationDate;

    const selectCell = document.createElement("td");
    const select = createCategorySelect(note);
    select.name = "category";
    select.setAttribute("form", "edit-note-form");
    selectCell.append(select);

    const contentCell = document.createElement("td");
    const contentTextarea = document.createElement("textarea");
    contentTextarea.required = true;
    contentTextarea.value = note.content;
    contentTextarea.classList.add("form-control");
    contentTextarea.name = "content";
    contentTextarea.setAttribute("form", "edit-note-form");
    contentCell.append(contentTextarea);

    const dates = document.createElement("td");
    dates.innerText = note.dates.join(", ");

    const actions = createEditActionsCell();

    row.append(nameCell, createdAt, selectCell, contentCell, dates, actions);
    return row;
}

function createEditActionsCell() {
    const actions = document.createElement("td");

    const actionsWrapper = document.createElement("div");
    actionsWrapper.classList.add("d-flex", "column-gap-2");

    const submitButton = document.createElement("button");
    submitButton.classList.add("btn", "btn-outline-primary");
    submitButton.type = "submit";
    submitButton.setAttribute("form", "edit-note-form");
    const submitIcon = createIcon("bi", "bi-check");
    submitButton.append(submitIcon);

    const discardButton = document.createElement("button");
    discardButton.classList.add("btn", "btn-outline-primary");
    const discardIcon = createIcon("bi", "bi-x");
    discardButton.addEventListener("click", handleDiscardClick);
    discardButton.append(discardIcon);

    actionsWrapper.append(submitButton, discardButton);
    actions.append(actionsWrapper);

    return actions;
}

export function createNoteEditForm(note, notes) {
    const form = document.createElement("form");
    form.id = "edit-note-form";
    form.addEventListener("submit", (e) =>
        handleSubmitEditForm(e, note, notes)
    );

    return form;
}
