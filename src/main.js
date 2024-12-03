import cors from 'cors';

import express from 'express'
import helmet from "helmet";
import { env, corsOptions } from './config.js';

const app = express();
app.use(helmet()); //generel security

app.use(cors(corsOptions));

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false }));

const PORT = env.PORT;
import rootRoute from './routes/index.js'

app.use('/', rootRoute);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})