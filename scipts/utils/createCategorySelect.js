import { categories } from "../init/initTables.js";

export default function createCategorySelect(note) {
    const select = document.createElement("select");
    select.classList.add("form-select");

    for (let category of categories) {
        const option = document.createElement("option");

        if (note && note.category === category) {
            option.selected = true;
        }

        option.value = category;
        option.innerText = category;
        select.append(option);
    }

    return select;
}
