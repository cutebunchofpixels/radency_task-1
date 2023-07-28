import { createCategoryIcon } from "../utils/createIcon.js";

export default function createNotesStatsTableContent(stats) {
    const body = document.createElement("tbody");

    for (const statsObject of stats) {
        const row = createNotesStatsTableRow(statsObject);
        body.append(row);
    }

    return body;
}

function createNotesStatsTableRow(statsObject) {
    const row = document.createElement("tr");

    const category = document.createElement("td");
    const categoryIcon = createCategoryIcon(statsObject.category);
    category.innerText = statsObject.category;
    category.insertAdjacentElement("afterbegin", categoryIcon);

    const amountActive = document.createElement("td");
    amountActive.innerText = statsObject.amountActive;

    const amountArchived = document.createElement("td");
    amountArchived.innerText = statsObject.amountArchived;

    row.append(category, amountActive, amountArchived);

    return row;
}
