import createNotesStatsTableContent from "./createNotesStatsTableContent.js";
import createNotesStatsTableHeading from "./createNotesStatsTableHeading.js";

export default function renderNotesStatsTable(tableId, stats) {
    const table = document.querySelector(`#${tableId}`);

    const newTable = document.createElement("table");
    newTable.classList.add("table", "table-hover");
    newTable.id = tableId;

    const heading = createNotesStatsTableHeading();
    const body = createNotesStatsTableContent(stats);

    newTable.append(heading, body);
    table.replaceWith(newTable);
}
