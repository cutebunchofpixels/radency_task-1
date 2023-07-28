import { setViewvingArchived } from "../init/initTables.js";

export default function createTableNavigation(
    isViewvingArchived,
    navigationId
) {
    const navigationHeader = document.createElement("h3");
    const toggleArchivedButton = document.createElement("button");
    const navigationWrapper = document.createElement("div");

    navigationWrapper.id = navigationId;
    toggleArchivedButton.classList.add("btn", "btn-primary");
    navigationWrapper.classList.add("d-flex", "column-gap-3");

    if (isViewvingArchived) {
        navigationHeader.innerText = "Archived notes";
        toggleArchivedButton.innerText = "View active";
    } else {
        navigationHeader.innerText = "Active notes";
        toggleArchivedButton.innerText = "View archived";
    }

    toggleArchivedButton.addEventListener("click", () =>
        setViewvingArchived(!isViewvingArchived)
    );

    navigationWrapper.append(navigationHeader, toggleArchivedButton);
    return navigationWrapper;
}
