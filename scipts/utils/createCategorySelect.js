import { categories } from "../init/initTables.js";

export default function createCategorySelect(note, placeholder) {
    const select = document.createElement("select");
    select.classList.add("form-select");

    if (placeholder) {
        const placeholderOption = document.createElement("option");
        placeholderOption.value = "";
        placeholderOption.disabled = true;
        placeholderOption.selected = true;
        placeholderOption.innerText = placeholder;

        select.append(placeholderOption);
    }

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
