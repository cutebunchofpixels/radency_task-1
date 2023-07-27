import Note from "../../models/Note.js";
import renderNotesTable from "../../scipts/NotesTable/renderNotesTable.js";

export function setNotes(newNotes) {
    notes = newNotes;
    updateTables();
}

export function updateTables() {
    renderNotesTable("notes-table-container", "notes-table", notes);
}

let notes = [
    new Note(
        "Shopping list",
        new Date("2023-07-20"),
        "Task",
        "Quisque porta enim ultricies orci tempus maximus nec a enim. Donec eget convallis mi. Etiam."
    ),
    new Note(
        "Scheduled meeting",
        new Date("2023-07-18"),
        "Idea",
        "Vestibulum leo est 5/5/2023, aliquet eu augue et, imperdiet viverra enim. Mauris vitae aliquet massa. Duis."
    ),
    new Note(
        "Maths",
        new Date("2023-07-16"),
        "Random Thought",
        "Morbi ut risus vitae libero auctor luctus."
    ),
    new Note(
        "Volutpat consequat mauris",
        new Date("2023-06-05"),
        "Task",
        "Quam id leo in 17/05/2023 vitae turpis massa sed 03/05/2023 elementum tempus."
    ),
    new Note(
        "Rhoncus aenean vel elits",
        new Date("2023-06-01"),
        "Task",
        "Nullam eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor nec feugiat nisl pretium."
    ),
    new Note(
        "Eget nunc",
        new Date("2023-05-27"),
        "Idea",
        "Quam pellentesque nec 29/05/2023 nam aliquam sem et tortor consequat id."
    ),
    new Note(
        "Viverra ipsum nunc aliquet bibendum",
        new Date("2023-05-19"),
        "Random Thought",
        "Orci eu lobortis elementum nibh tellus molestie nunc non blandit."
    ),
];
