const yargs =  require('yargs');
const pkg = require('./package.json');

yargs.command({
  command: 'add',
  describe: 'add new note to list',
  builder: {
    title: {
      type: 'string',
      discribe: 'Note title ',
      demandOption: true,
    }
  },
  handler() {
    console.log('Add comman');
  }
})

yargs.command({
  command: 'list',
  describe: 'print all notes',
  handler() {
    console.log('List comman');
  }
})

yargs.parse();
