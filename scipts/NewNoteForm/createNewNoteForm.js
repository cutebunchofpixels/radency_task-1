import createCategorySelect from "../utils/createCategorySelect.js";
import { handleNewNoteFormSubmit } from "./handlers/handleNewNoteFormSubmit.js";

export default function createNewNoteForm(formId, notes) {
    const form = document.createElement("form");
    form.id = formId;
    form.classList.add("row", "g-3", "w-50", "m-auto");
    form.addEventListener("submit", (e) => handleNewNoteFormSubmit(e, notes));

    const formContentWrapper = document.createElement("div");
    formContentWrapper.classList.add("formContentw");

    const nameInput = document.createElement("input");
    nameInput.name = "noteName";
    nameInput.placeholder = "Note name";
    nameInput.classList.add("form-control");

    const nameInputWrapper = document.createElement("div");
    nameInputWrapper.classList.add("col-md-6", "col-sm-12");
    nameInputWrapper.append(nameInput);

    const categorySelect = createCategorySelect(undefined, "Note category");
    categorySelect.name = "category";

    const categorySelectWrapper = document.createElement("div");
    categorySelectWrapper.classList.add("col-md-6", "col-sm-12");
    categorySelectWrapper.append(categorySelect);

    const contentTextarea = document.createElement("textarea");
    contentTextarea.name = "content";
    contentTextarea.placeholder = "Note content";
    contentTextarea.classList.add("form-control");

    const contentTextareaWrapper = document.createElement("div");
    contentTextareaWrapper.classList.add("col-12");
    contentTextareaWrapper.append(contentTextarea);

    const submitButton = document.createElement("button");
    submitButton.classList.add("btn", "btn-primary");
    submitButton.type = "submit";
    submitButton.innerText = "Submit";

    const submitButtonWrapper = document.createElement("div");
    submitButtonWrapper.classList.add("col-12");
    submitButtonWrapper.append(submitButton);

    form.append(
        nameInputWrapper,
        categorySelectWrapper,
        contentTextareaWrapper,
        submitButtonWrapper
    );

    return form;
}
