import { Router } from "express";
import { expressYupMiddleware } from "express-yup-middleware";

import usersSchema from "../schemas/users.schema.js";
import borrowsSchema from "../schemas/borrows.schema.js";


import usersService from "../services/users.service.js";
import { cleanAdd } from "../middlewares/cleaner.middleware.js";


const router = Router();

router.get('/', expressYupMiddleware({ schemaValidator: usersSchema.listsUser }), async (req, res) => {
    //const { limit } = req.query;
    const usersResponse = await usersService.getAll()
    
    return res.status(usersResponse.status).json({ data: usersResponse.data, error: usersResponse.error });
});


router.post('/:userId/borrow/:bookId',cleanAdd, expressYupMiddleware({ schemaValidator: borrowsSchema.editBorrow }), async (req, res) => {
    const { userId, bookId } = req.params;
    
    const userResponse = await usersService.borrow({ user_id: userId, book_id: bookId})
    return res.status(userResponse.status).json({ data: userResponse.data, error: userResponse.error });
});

router.post('/:userId/return/:bookId', cleanAdd,expressYupMiddleware({ schemaValidator: borrowsSchema.returnBorrow }), async (req, res) => {
    const { userId, bookId } = req.params;
    const { score } = req.body;
    const userResponse = await usersService.returnIt({ user_id: userId, book_id: bookId, score })
    return res.status(userResponse.status).json({ data: userResponse.data, error: userResponse.error });
});

router.get('/:id', expressYupMiddleware({ schemaValidator: usersSchema.getUser }), async (req, res) => {
    const { id } = req.params;
    const userResponse = await usersService.get({ id })
    return res.status(userResponse.status).json({ data: userResponse.data, error: userResponse.error });
});

router.post('/', cleanAdd, expressYupMiddleware({ schemaValidator: usersSchema.addUser }), async (req, res) => {
    const { name } = req.body;
    const userAddResponse = await usersService.add({ name })
    return res.status(userAddResponse.status).json({ data: userAddResponse.data, error: userAddResponse.error });
});




export default router;

