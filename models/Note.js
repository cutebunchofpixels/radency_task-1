import { validateModel, getInvalidFiels } from "./validationUtils.js";
import { categories } from "../scipts/init/initTables.js";

export default class Note {
    constructor(id, name, creationDate, category, content, isArchived) {
        this.id = id;
        this.name = name;
        this.creationDate = creationDate;
        this.category = category;
        this.content = content;
        this.dates = this.#parseDates();
        this.isArchived = isArchived;

        if (!validateModel(this, this.#validationSchema)) {
            throw new Error(
                getInvalidFiels(this, this.#validationSchema).join(", ")
            );
        }
    }

    #validationSchema = {
        name: (value) => /.+/.test(value),
        creationDate: (value) => value instanceof Date && value <= Date.now(),
        category: (value) => categories.includes(value),
        content: (value) => /.+/.test(value),
        isArchived: (value) => typeof value === "boolean",
        dates: (value) =>
            Array.isArray(value) &&
            value.every((date) => typeof date === "string"),
    };

    #parseDates() {
        const dateRegex =
            /(0?[1-9]|[1-2][0-9]|3[0-1])\/(0?[1-9]|1[0-2])\/([0-9]{4})/g;
        const dates = this.content.match(dateRegex) || [];

        return dates;
    }
}
