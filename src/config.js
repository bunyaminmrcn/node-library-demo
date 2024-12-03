import dotenv from 'dotenv';

const loadEnv = dotenv.config({ path: process.env.dev == '1' ? './src/.env.development' : './src/.env.production' })


const env = (loadEnv.error ? { PORT : 5000 }: loadEnv.parsed);

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
}
export { env , corsOptions }