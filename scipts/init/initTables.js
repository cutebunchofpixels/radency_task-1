import Note from "../../models/Note.js";
import NotesStatistics from "../../models/NotesStatistics.js";
import renderNotesTable from "../NotesTable/renderNotesTable.js";
import renderNewNotesForm from "../NewNoteForm/renderNewNoteForm.js";
import renderNotesStatstable from "../NotesStatsTable/renderNotesStatsTable.js";

let initialId = 1;

export const notesTableId = "notes-table";
export const categories = ["Task", "Idea", "Random Thought"];

export function setNotes(newNotes) {
    notes = newNotes;
    updateNewNoteForm();
    updateNotesTable();
    updateNotesStatsTable();
}

export function updateNotesTable() {
    renderNotesTable(
        "notes-table-navigation",
        "notes-table",
        notes,
        isViewvingArchived
    );
}

export function updateNotesStatsTable() {
    const stats = categories.map((category) =>
        NotesStatistics.createFromNotes(category, notes)
    );
    renderNotesStatstable("notes-stats-table", stats);
}

export function updateTables() {
    updateNotesTable();
    updateNotesStatsTable();
}

export function setViewvingArchived(value) {
    isViewvingArchived = value;
    updateNotesTable();
}

export function updateNewNoteForm() {
    renderNewNotesForm("new-note-form", notes);
}

let isViewvingArchived = false;
let notes = [
    new Note(
        initialId++,
        "Shopping list",
        new Date("2023-07-20"),
        "Task",
        "Quisque porta enim ultricies orci tempus maximus nec a enim. Donec eget convallis mi. Etiam.",
        false
    ),
    new Note(
        initialId++,
        "Scheduled meeting",
        new Date("2023-07-18"),
        "Idea",
        "Vestibulum leo est 5/5/2023, aliquet eu augue et, imperdiet viverra enim. Mauris vitae aliquet massa. Duis.",
        false
    ),
    new Note(
        initialId++,
        "Maths",
        new Date("2023-07-16"),
        "Random Thought",
        "Morbi ut risus vitae libero auctor luctus.",
        false
    ),
    new Note(
        initialId++,
        "Volutpat consequat mauris",
        new Date("2023-06-05"),
        "Task",
        "Quam id leo in 17/05/2023 vitae turpis massa sed 03/05/2023 elementum tempus.",
        false
    ),
    new Note(
        initialId++,
        "Rhoncus aenean vel elits",
        new Date("2023-06-01"),
        "Task",
        "Nullam eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor nec feugiat nisl pretium.",
        false
    ),
    new Note(
        initialId++,
        "Eget nunc",
        new Date("2023-05-27"),
        "Idea",
        "Quam pellentesque nec 29/05/2023 nam aliquam sem et tortor consequat id.",
        false
    ),
    new Note(
        initialId++,
        "Viverra ipsum nunc aliquet bibendum",
        new Date("2023-05-19"),
        "Random Thought",
        "Orci eu lobortis elementum nibh tellus molestie nunc non blandit.",
        false
    ),
];
