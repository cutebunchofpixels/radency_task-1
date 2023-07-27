export default function generateNoteId(notes) {
    const copy = [...notes];
    copy.sort((a, b) => b.id - a.id);

    const newId = copy[0].id + 1;

    return newId;
}
