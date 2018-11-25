const fs = require('fs');

const originalNote = {
  title: 'this is my title',
  body: 'some body used to know'
}

const originalNoteString = JSON.stringify(originalNote);
 
fs.writeFileSync('newFile.json', originalNoteString);
 
const whatWeAreReading = fs.readFileSync('newFile.json');

const whatWeAreReadingObj = JSON.parse(whatWeAreReading);
console.log(whatWeAreReadingObj.title);