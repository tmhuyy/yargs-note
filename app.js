"use strict";
// TODO import npm packages
const yargs = require("yargs");
const notes = require("./src/notes");

// node app.js add --name="Huy"
// console.log(yargs.argv.name);

// config your version
yargs.version("1.1.0");

// IDEA add, remov, read, list note

// TODO Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// TODO Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Delete note",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  },
});

// TODO Create list command
yargs.command({
  command: "list",
  describe: "List all of the notes",
  builder: {},
  handler: function () {
    notes.listNotes();
  },
});

// TODO Create read command
yargs.command({
  command: "read",
  describe: "Read the content",
  builder: {
    title: {
      describe: "Read content",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.readNote(argv.title);
  },
});

yargs.parse();
// console.log(yargs.argv);
