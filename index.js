const yargs =  require('yargs');
const { addNote, getNotes } = require('./notes.controller');

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
  handler() {
    console.log(getNotes());
  }
})

yargs.parse();
