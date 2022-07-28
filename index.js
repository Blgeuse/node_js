const yargs =  require('yargs');
const { addNote, getNotes, removeNote } = require('./notes.controller');

yargs.command({
  command: 'add',
  describe: 'add new note to list',
  builder: {
    title: {
      type: 'string',
      describe: 'Note title ',
      demandOption: true,
    }
  },
  handler({title}) {
    addNote(title);
  }
})

yargs.command({
  command: 'list',
  describe: 'print all notes',
  async handler() {
    const notes = await getNotes()
    console.log(notes);
  }
})

yargs.command({
  command: 'remove',
  describe: 'deleting a note by id',
  builder: {
    id: {
      type: 'string',
      describe: 'Note id',
      demandOption: true,
    }
  },
  handler({id}) {
    removeNote(id);
  }
})

yargs.parse();
