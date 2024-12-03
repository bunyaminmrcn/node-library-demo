import User from "../models/user.model.js";
import Book from "../models/book.model.js";
import Borrow from "../models/borrow.model.js";


const getAll = async () => {
    try {
        const users = await User.findAll();
        return  {data: users, error: null, status: 200};
    } catch ( error ){
        return  {data: null, error,status: 500 };
    }
    
}

const add = async ({ name }) => {
    try {
        const user = await User.create({ name });
        return  {data: user, error: null, status: 201};
    } catch ( error ){
        return  {data: null, error, status: 401 };
    }
}

const get = async ({ id }) => {
    try {
        const user = await User.findById(id);
        return  {data: user, error: null,  status: 200};
    } catch ( error ){
        return  {data: null, error, status: 404 };
    }
}


const borrow = async ({ user_id, book_id }) => {
    try {
        const user = await User.findById(user_id);
        const book = await Book.findById(book_id);

        if(!user || !book) {
            return  {data: null, error: { msg: 'Entries not found of each user/book'}, status: 404 };
        }
        const borrow = await Borrow.create({ user_id, book_id});
        return  {data: borrow, error: null, status: 201};
    } catch ( error ){
        return  {data: null, error, status: 401 };
    }
}

const returnIt = async ({ user_id, book_id, score }) => {
    try {
        const user = await User.findById(user_id);
        const book = await Book.findById(book_id);
        
        if(!user || !book) {
            return  {data: null, error: { msg: 'Entries not found of each user/book'}, status: 404 };
        }
        const borrow = await Borrow.findByIds(user_id, book_id);
        if(!borrow) {
            return  {data: null, error: { msg: 'Entry not found'}, status: 404 };
        }

        const returnEntity = await Borrow.update(borrow.id, { user_id, book_id, score: +score })
        return  {data: returnEntity, error: null, status: 201};
    } catch ( error ){
        return  {data: null, error, status: 401 };
    }
}

export default { getAll , get, add,borrow, returnIt };