import dotenv from 'dotenv';
import { Logger } from '@overnightjs/logger';
import MainServer from './main';

// initialize configuration
dotenv.config();
const logger = new Logger();
logger.warn(`Dot Env Port: ${process.env.SERVER_PORT}`);

const PORT =  process.env.SERVER_PORT;
const mainServer = new MainServer();
mainServer.start(PORT);
