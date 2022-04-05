"use strict";
const fs = require("fs");
const chalk = require("chalk");
const getNotes = function () {};

const addNote = function (title, body) {
  const notes = loadNotes();
  const duplicateTitle = notes.filter((note) => note.title === title);
  // if not dup => an empty arrray => length = 0s
  if (duplicateTitle.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    console.log(chalk.green.inverse("A new title"));
  } else {
    console.log(chalk.red.inverse("Invalid title"));
  }
  saveNotes(notes);
};

const removeNote = function (title) {
  const notes = loadNotes();
  const checkExist = notes.some((note) => note.title === title);
  // checkExist ? console.log("yes") : console.log("no");
  if (checkExist) {
    console.log(chalk.green.inverse("Note removed"));
    const newData = notes.filter((note) => note.title !== title);
    saveNotes(newData);
  } else {
    console.log(chalk.red.inverse("No note found!"));
  }
};

const listNotes = function () {
  const notes = loadNotes();
  for (let note of notes) {
    console.log(`${chalk.green.inverse("Your notes:")} ${note.title}`);
  }
};

const readNote = function (title) {
  const notes = loadNotes();
  const checkExist = notes.find((note) => note.title === title);

  checkExist
    ? console.log(
        `${chalk.green.inverse(checkExist.title)}: ${checkExist.body}`
      )
    : console.log(chalk.red.inverse("No note found!"));
};

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = function () {
  try {
    const data = fs.readFileSync("notes.json", "utf8");
    return JSON.parse(data);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes,
  addNote,
  removeNote,
  listNotes,
  readNote,
};
