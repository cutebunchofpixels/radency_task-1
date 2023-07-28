export default function createNotesStatsTableHeading() {
    const heading = document.createElement("thead");
    const row = document.createElement("tr");

    const category = document.createElement("th");
    category.innerText = "Note category";

    const amountActive = document.createElement("th");
    amountActive.innerText = "Active";

    const amountArchived = document.createElement("th");
    amountArchived.innerText = "Archived";

    row.append(category, amountActive, amountArchived);
    heading.append(row);
    return heading;
}
