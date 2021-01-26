const fs = require('fs/promises');
const chalk = require('chalk');

const filePath = 'notes.json';

const getNotes = async () => {
    return loadNotes();
}

const addNote = async (title, body) => {
    const notes = await loadNotes();

    const existing = notes.filter((note) => note.title === title);

    if (existing.length > 0) {
        console.log(chalk.red.bold('Note title taken!'))
        return
    }

    notes.push({
        title: title,
        body: body
    })

    await saveNotes(notes)

    console.log(chalk.green('New note added!'));
}

const removeNote = async (title) => {
    const notes = await loadNotes()
    
    const filtered = notes.filter((note) => note.title !== title);

    if (filtered.length === notes.length) {
        console.log(chalk.red.bold('No note found!'))
        return
    }

    await saveNotes(filtered)

    console.log(chalk.green('Note removed!'))
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
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