import createIcon from "../utils/createIcon.js";
import { handleArchiveNote } from "./handlers/archiveNotes.js";
import { handleEditClick } from "./handlers/editNote.js";
import { handleRemoveNote } from "./handlers/removeNotes.js";

export default function createNotesTableContent(notes, isViewvingArchived) {
    const body = document.createElement("tbody");

    let visibleNotes;
    if (isViewvingArchived) {
        visibleNotes = notes.filter((note) => note.isArchived);
    } else {
        visibleNotes = notes.filter((note) => !note.isArchived);
    }

    for (const note of visibleNotes) {
        const row = createNotesTableRow(note, notes);
        body.append(row);
    }

    return body;
}

function createNotesTableRow(note, notes) {
    const row = document.createElement("tr");

    const name = document.createElement("td");
    name.innerText = note.name;
    row.append(name);

    const createdAt = document.createElement("td");
    createdAt.innerText = note.creationDate.toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    row.append(createdAt);

    const category = document.createElement("td");
    category.innerText = note.category;
    row.append(category);

    const content = document.createElement("td");
    content.innerText = note.content;
    row.append(content);

    const dates = document.createElement("td");
    dates.innerText = note.dates.join(", ");
    row.append(dates);

    const actions = createActionsCell(note, notes);
    row.append(actions);

    return row;
}

function createActionsCell(note, notes) {
    const tableData = document.createElement("td");

    const actionsWrapper = document.createElement("div");
    actionsWrapper.classList.add("d-flex", "column-gap-2");

    const editButton = document.createElement("button");
    editButton.classList.add("btn", "btn-outline-primary");
    editButton.addEventListener("click", (e) =>
        handleEditClick(e, note, notes)
    );
    editButton.setAttribute("data-edit-note-button", "");
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
