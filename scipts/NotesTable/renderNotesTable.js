import createNotesTableHeading from "./createNotesTableHeading.js";
import createNotesTableContent from "./createNotesTableContent.js";
import createTableNavigation from "./createTableNavigation.js";

export default function renderNotesTable(
    navigationId,
    tableId,
    notes,
    isViewvingArchived
) {
    const table = document.querySelector(`#${tableId}`);
    const navigation = document.querySelector(`#${navigationId}`);

    const newTable = document.createElement("table");
    newTable.id = tableId;
    newTable.classList.add("table", "table-hover");

    const heading = createNotesTableHeading(notes);
    const body = createNotesTableContent(notes, isViewvingArchived);
    const newNavigation = createTableNavigation(
        isViewvingArchived,
        navigationId
    );

    newTable.append(heading, body);

    navigation.replaceWith(newNavigation);
    table.replaceWith(newTable);
}
