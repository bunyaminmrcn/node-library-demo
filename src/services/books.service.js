import Book from "../models/book.model.js";

const getAll = async () => {
    try {
        const books = await Book.findAll();
        
        return  {data: books, error: null, status: 200};
    } catch ( error ){
        return  {data: null, error,status: 500 };
    }
    
}

const add = async ({ name }) => {
    try {
        const book = await Book.create({ name });
        return  {data: book, error: null, status: 201};
    } catch ( error ){
        return  {data: null, error, status: 401 };
    }
}

const get = async ({ id }) => {
    try {
        const book = await Book.findById(id);
        return  {data: book, error: null,  status: 200};
    } catch ( error ){
        return  {data: null, error, status: 404 };
    }
}

export default { getAll , get, add };