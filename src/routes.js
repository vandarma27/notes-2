const { addNoteHandler, getAllNotesHandler, getNotesByIdHandler, editNotebyIdHandler, deleteNotesByIdHandler } = require("./handler");

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
    },

    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deleteNotesByIdHandler
    }
]

module.exports = routes;