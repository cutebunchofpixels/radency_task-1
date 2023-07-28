export default function generateNoteId(notes) {
    if (notes.length === 0) {
        return 1;
    }

    const copy = [...notes];
    copy.sort((a, b) => b.id - a.id);

    const newId = copy[0].id + 1;

    return newId;
}
