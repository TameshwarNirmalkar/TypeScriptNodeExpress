import dotenv from 'dotenv';
import { cerr, cinfo, cwarn, cimp } from 'simple-color-print';
import MainServer from './main';

// initialize configuration
dotenv.config();
// const logger = new Logger();
cwarn(`Dot Env Port: ${process.env.SERVER_PORT}`);

const PORT =  process.env.SERVER_PORT;
const mainServer = new MainServer();
mainServer.start(PORT);
