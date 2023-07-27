import { validateModel, getInvalidFiels } from "./validationUtils.js";

export default class Note {
    constructor(id, name, creationDate, category, content) {
        this.id = id;
        this.name = name;
        this.creationDate = creationDate;
        this.category = category;
        this.content = content;
        this.isArchived = false;
        this.dates = this.#parseDates();

        if (!validateModel(this, this.#validationSchema)) {
            throw new Error(
                getInvalidFiels(this, this.#validationSchema).join(", ")
            );
        }
    }

    #validationSchema = {
        name: (value) => /.+/.test(value),
        creationDate: (value) => value instanceof Date && value <= Date.now(),
        category: (value) => /^(Task|Idea|Random Thought)$/.test(value),
        content: (value) => /.+/.test(value),
        isArchived: (value) => typeof value === "boolean",
        dates: (value) =>
            Array.isArray(value) &&
            value.every((date) => typeof date === "string"),
    };

    #parseDates() {
        const dateRegex =
            /(0?[1-9]|[1-2][0-9]|3[0-1])\/(0?[1-9]|1[0-2])\/([0-9]{4})/g;
        const matches = [...this.content.matchAll(dateRegex)];
        const dates = matches.map((match) => match[0]);

        return dates;
    }
}
