import { Router } from "express";
import { expressYupMiddleware } from "express-yup-middleware";

import booksSchema from "../schemas/books.schema.js";
import booksService from "../services/books.service.js";
import { cleanAdd } from "../middlewares/cleaner.middleware.js";

const router = Router();

router.get('/', expressYupMiddleware({ schemaValidator: booksSchema.listsBook }), async (req, res) => {
    //const { limit } = req.query;
    const usersResponse = await booksService.getAll()
    return res.status(usersResponse.status).json({ data: usersResponse.data, error: usersResponse.error });
});

router.get('/:id', expressYupMiddleware({ schemaValidator: booksSchema.getBook }), async (req, res) => {
    const { id } = req.params;
    const userResponse = await booksService.get({ id })
    return res.status(userResponse.status).json({ data: userResponse.data, error: userResponse.error });
});

router.post('/', cleanAdd, expressYupMiddleware({ schemaValidator: booksSchema.addBook }), async (req, res) => {
    const { name } = req.body;
    const userAddResponse = await booksService.add({ name })
    return res.status(userAddResponse.status).json({ data: userAddResponse.data, error: userAddResponse.error });
});


export default router;