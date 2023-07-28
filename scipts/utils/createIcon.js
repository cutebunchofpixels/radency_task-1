export default function createIcon(...classNames) {
    const icon = document.createElement("i");
    icon.classList.add(...classNames);
    return icon;
}

export function createCategoryIcon(category) {
    let categoryIcon;

    switch (category) {
        case "Idea":
            categoryIcon = createIcon("bi", "bi-lightbulb-fill");
            break;
        case "Task":
            categoryIcon = createIcon("bi", "bi-gear-fill");
            break;
        case "Random Thought":
            categoryIcon = createIcon("bi", "bi-megaphone-fill");
            break;
        default:
            return;
    }

    categoryIcon.classList.add("me-2");
    return categoryIcon;
}
