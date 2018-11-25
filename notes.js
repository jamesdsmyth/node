console.log('Starting notes.js');

const fs = require('fs');

// fetching the notes
const fetchNotes = () => {
  try {
    const savedNotes = fs.readFileSync('notes-data.json');
    return JSON.parse(savedNotes);

  } catch(err) {
    console.log('we did not have any notes saved');
  }
}

// saveing the notes
const saveNotes = notes => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

const addNote = (title, body) => {
  const notes = fetchNotes();
  let note = {
    title,
    body
  }

  const duplicateNotes = notes.filter(item => item.title === title);

  if(duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
}

const removeNote = title => {
  // getting all notes
  const notes = fetchNotes();

  // filtering out the note we want to remove
  const filteredNotes = notes.filter(item => item.title !== title);

  if(notes.length !== filteredNotes.length) {
    return true;
  }

  // saving the notes
  saveNotes(notes);
}

const getAll = (args) => {
  console.log('getting all notes and here they are', args);
}

const read = (title) => {
  console.log('reading the title here', title);
}

const remove = title => {
  removeNote(title);
}

module.exports = {
  addNote,
  getAll,
  read,
  remove
}