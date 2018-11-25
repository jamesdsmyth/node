console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
const command  = argv._[0];
console.log('yargs', argv);

if(command === 'add') {
  const noteReturned = notes.addNote(argv.title, argv.body);
  if(noteReturned) {
    console.log('the note was created');
    console.log('----');
    console.log(`Title ${note.title}`);
  } else {
    console.log('the result was not created');
  }
} else if(command === 'list'){
  notes.getAll(argv);
} else if(command === 'read'){
  notes.read(argv.title);
} else if(command === 'remove'){
  const noteRemoved = notes.remove(argv.title);
  const message = noteRemoved ? 'Note was removed' : 'Note was not removed';
  console.log(message);
} else {
  console.log('Command not recognised');
}