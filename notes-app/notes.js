const fs = require('fs/promises');
const chalk = require('chalk');

const filePath = 'notes.json';

const addNote = async (title, body) => {
    const notes = await loadNotes();

    const existing = notes.find((note) => note.title === title)

    if (existing) {
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

const listNotes = async() => {
    
    console.log(chalk.inverse('Your notes:'))

    const notes = await loadNotes()
    
    notes.forEach((note => {
        console.log(note.title)
    }))
}

const readNote = async(title) => {
    const notes = await loadNotes()

    const note = notes.find((note) => note.title === title)
    
    if (!note) {
        console.log(chalk.red.bold('No note found!'))
    }

    console.log(chalk.inverse(note.title))
    console.log(note.body)
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
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