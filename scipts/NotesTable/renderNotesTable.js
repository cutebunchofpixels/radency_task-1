import createNotesTableHeading from "./createNotesTableHeading.js";
import createNotesTableContent from "./createNotesTableContent.js";

export default function renderNotesTable(parentId, tableId, notes) {
    const parent = document.querySelector(`#${parentId}`);
    const table = document.querySelector(`#${tableId}`);

    parent.removeChild(table);

    const newTable = document.createElement("table");
    newTable.id = tableId;
    newTable.classList.add("table", "table-hover");

    const heading = createNotesTableHeading(notes);
    const body = createNotesTableContent(notes);

    newTable.append(heading, body);

    parent.append(newTable);
}
