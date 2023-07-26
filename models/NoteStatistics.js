export default class NotesStatistics {
    constructor(category, amountActive, amountArchived) {
        this.category = category;
        this.amountActive = amountActive;
        this.amountArchived = amountArchived;
    }

    static createFromNotes(category, notes) {
        let amountActive = 0;
        let amountArchived = 0;

        for (const note of notes) {
            if (note.category === category && note.isArchived) {
                amountArchived++;
            } else if (note.category === category && !note.isArchived) {
                amountActive++;
            }
        }

        return new NotesStatistics(category, amountActive, amountArchived);
    }

    #validationSchema = {
        category: (value) => /^(Task|Idea|Random Thought)$/.test(value),
        amountActive: (value) => Number.isInteger(value) && value > 0,
        amountArchived: (value) => Number.isInteger(value) && value > 0,
    };
}
