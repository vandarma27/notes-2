const { addNoteHandler, getAllNotesHandler, getNotesByIdHandler, editNotebyIdHandler } = require("./handler");

const routes = [
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler
    },

    {
        method: 'GET',
        path: '/notes',
        handler: getAllNotesHandler,
    },

    {
        method: 'GET',
        path: '/notes/{id}',
        handler: getNotesByIdHandler
    },

    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: editNotebyIdHandler
    }
]

module.exports = routes;