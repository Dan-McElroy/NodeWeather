const fs = require('fs/promises');
const chalk = require('chalk');

const filePath = 'notes.json';

function getNotes() {
    return "Your notes...";
}

const addNote = async (title, body) => {
    const notes = await loadNotes();

    const duplicates = notes.filter((note) => note.title === title);

    if (duplicates.length > 0) {
        console.log(chalk.red.bold('Error: Note with this title already exists, new note not added.'))
        return
    }

    notes.push({
        title: title,
        body: body
    })

    await saveNotes(notes)

    console.log(chalk.green('New note added!'));
}

const loadNotes = async () => {
    try {
        const dataBuffer = await fs.readFile(filePath)
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        console.log(e);
        return []
    }
};

const saveNotes = async (notes) => {
    await fs.writeFile(filePath, JSON.stringify(notes));
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote
}