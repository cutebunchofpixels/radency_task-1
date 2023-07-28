import createIcon from "../utils/createIcon.js";
import { handleArchiveAllNotes } from "./handlers/archiveNotes.js";
import { handleRemoveAllNotes } from "./handlers/removeNotes.js";

export default function createNotesTableHeading(notes) {
    const heading = document.createElement("thead");

    const row = createHeadingRow(notes);

    heading.append(row);
    return heading;
}

function createHeadingRow(notes) {
    const row = document.createElement("tr");

    const name = document.createElement("th");
    name.innerText = "Name";
    name.classList.add("w-15");

    const createdAt = document.createElement("th");
    createdAt.innerText = "Created";

    const category = document.createElement("th");
    category.innerText = "Category";

    const content = document.createElement("th");
    content.innerText = "Content";
    content.classList.add("w-35");

    const dates = document.createElement("th");
    dates.innerText = "Dates";

    const actions = createActionsHeading(notes);

    row.append(name, createdAt, category, content, dates, actions);
    return row;
}

function createActionsHeading(notes) {
    const tableHeading = document.createElement("th");

    const actionsWrapper = document.createElement("div");
    actionsWrapper.classList.add("d-flex", "column-gap-2");

    const archiveAllButton = document.createElement("button");
    archiveAllButton.classList.add("btn", "btn-outline-primary");
    archiveAllButton.append(createIcon("bi", "bi-archive"));
    archiveAllButton.addEventListener("click", () =>
        handleArchiveAllNotes(notes)
    );

    const removeAllButton = document.createElement("button");
    removeAllButton.classList.add("btn", "btn-outline-primary");
    removeAllButton.addEventListener("click", handleRemoveAllNotes);
    removeAllButton.append(createIcon("bi", "bi-x"));

    actionsWrapper.append(archiveAllButton, removeAllButton);
    tableHeading.append(actionsWrapper);

    return tableHeading;
}
