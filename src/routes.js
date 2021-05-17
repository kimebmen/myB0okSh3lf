const {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
    //   handler: () => {},
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
    // handler: () => {},
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookByIdHandler,
    // handler: () => {},
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookByIdHandler,
    // handler: () => {},
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookByIdHandler,
    // handler: () => {},
  },

];

module.exports = routes;
