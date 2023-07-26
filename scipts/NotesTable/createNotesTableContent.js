import createIcon from "../utils/createIcon.js";

export default function createNotesTableContent(notes) {
    const body = document.createElement("tbody");

    for (const note of notes) {
        const row = createNotesTableRow(note);
        body.append(row);
    }

    return body;
}

function createNotesTableRow(note) {
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

    const actions = createActionsCell();
    row.append(actions);

    return row;
}

function createActionsCell(note) {
    const tableData = document.createElement("td");

    const actionsWrapper = document.createElement("div");
    actionsWrapper.classList.add("d-flex", "column-gap-2");

    const editButton = document.createElement("button");
    editButton.classList.add("btn", "btn-outline-primary");
    editButton.append(createIcon("bi", "bi-pencil"));

    const archiveButton = document.createElement("button");
    archiveButton.classList.add("btn", "btn-outline-primary");
    archiveButton.append(createIcon("bi", "bi-archive"));

    const removeButton = document.createElement("button");
    removeButton.classList.add("btn", "btn-outline-primary");
    removeButton.append(createIcon("bi", "bi-x"));

    actionsWrapper.append(editButton, archiveButton, removeButton);
    tableData.append(actionsWrapper);

    return tableData;
}