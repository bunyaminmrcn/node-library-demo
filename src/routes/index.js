import { Router } from "express";

import usersRoute from './users.route.js';
import booksRoute from './books.route.js';

const router = Router();
router.use('/users', usersRoute)
router.use('/books', booksRoute)

export default router;