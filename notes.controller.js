const fs = require('fs/promises');
const path = require('path');
const notesPath = path.join(__dirname, 'db.json');

async function writeNotes(notes) {
  await fs.writeFile(notesPath, JSON.stringify(notes));
}

async function addNote(title) {
  const notes = await getNotes();

  const note = {
    title,
    id: Date.now().toString(),
  }

  notes.push(note);
  await writeNotes(notes);
}

async function getNotes() {
  const notes = await fs.readFile(notesPath, {encoding: 'utf-8'});
  const notesArr = JSON.parse(notes);
  return Array.isArray(notesArr) ? notesArr : [];
}

async function removeNote(removeId) {
  let notes = await getNotes();

  notes = notes.filter(({id}) => id !== removeId);

  await writeNotes(notes);
}

module.exports = {
  addNote,
  getNotes,
  removeNote,
}
