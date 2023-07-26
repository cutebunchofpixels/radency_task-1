import createIcon from "../utils/createIcon.js";

export default function createNotesTableHeading() {
    const heading = document.createElement("thead");

    const row = createHeadingRow();

    heading.append(row);
    return heading;
}

function createHeadingRow() {
    const row = document.createElement("tr");

    const name = document.createElement("th");
    name.innerText = "Name";
    row.append(name);

    const createdAt = document.createElement("th");
    createdAt.innerText = "Created";
    row.append(createdAt);

    const category = document.createElement("th");
    category.innerText = "Category";
    row.append(category);

    const content = document.createElement("th");
    content.innerText = "Content";
    content.classList.add("w-25");
    row.append(content);

    const dates = document.createElement("th");
    dates.innerText = "Dates";
    row.append(dates);

    const actions = createActionsHeading();
    row.append(actions);

    return row;
}

function createActionsHeading() {
    const tableHeading = document.createElement("th");

    const actionsWrapper = document.createElement("div");
    actionsWrapper.classList.add("d-flex", "column-gap-2");

    const archiveAllButton = document.createElement("button");
    archiveAllButton.classList.add("btn", "btn-outline-primary");
    archiveAllButton.append(createIcon("bi", "bi-archive"));

    const removeAllButton = document.createElement("button");
    removeAllButton.classList.add("btn", "btn-outline-primary");
    removeAllButton.append(createIcon("bi", "bi-x"));

    actionsWrapper.append(archiveAllButton, removeAllButton);
    tableHeading.append(actionsWrapper);

    return tableHeading;
}