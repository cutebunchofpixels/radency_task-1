import createIcon, { createCategoryIcon } from "../utils/createIcon.js";
import { handleArchiveNote } from "./handlers/archiveNotes.js";
import { handleEditClick } from "./handlers/editNote.js";
import { handleRemoveNote } from "./handlers/removeNotes.js";

export default function createNotesTableContent(
    notes,
    isViewvingArchived,
    editFormId
) {
    const body = document.createElement("tbody");

    let visibleNotes;
    if (isViewvingArchived) {
        visibleNotes = notes.filter((note) => note.isArchived);
    } else {
        visibleNotes = notes.filter((note) => !note.isArchived);
    }

    for (const note of visibleNotes) {
        const row = createNotesTableRow(note, notes, editFormId);
        body.append(row);
    }

    return body;
}

function createNotesTableRow(note, notes, editFormId) {
    const row = document.createElement("tr");

    const name = document.createElement("td");
    const categoryIcon = createCategoryIcon(note.category);
    name.innerText = note.name;
    name.insertAdjacentElement("afterbegin", categoryIcon);

    const createdAt = document.createElement("td");
    createdAt.innerText = note.creationDate.toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const category = document.createElement("td");
    category.innerText = note.category;

    const content = document.createElement("td");
    content.innerText = note.content;

    const dates = document.createElement("td");
    dates.innerText = note.dates.join(", ");

    const actions = createActionsCell(note, notes, editFormId);

    row.append(name, createdAt, category, content, dates, actions);
    return row;
}

function createActionsCell(note, notes, editFormId) {
    const tableData = document.createElement("td");

    const actionsWrapper = document.createElement("div");
    actionsWrapper.classList.add("d-flex", "column-gap-2");

    const editButton = document.createElement("button");
    editButton.classList.add("btn", "btn-outline-primary");
    editButton.addEventListener("click", (e) =>
        handleEditClick(e, note, notes, editFormId)
    );
    editButton.append(createIcon("bi", "bi-pencil"));

    const archiveButton = document.createElement("button");
    archiveButton.classList.add("btn", "btn-outline-primary");
    archiveButton.addEventListener("click", () =>
        handleArchiveNote(note.id, notes)
    );
    archiveButton.append(createIcon("bi", "bi-archive"));

    const removeButton = document.createElement("button");
    removeButton.classList.add("btn", "btn-outline-primary");
    removeButton.addEventListener("click", () => {
        handleRemoveNote(note.id, notes);
    });
    removeButton.append(createIcon("bi", "bi-x"));

    actionsWrapper.append(editButton, archiveButton, removeButton);
    tableData.append(actionsWrapper);

    return tableData;
}
