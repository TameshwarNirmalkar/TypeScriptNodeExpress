import * as express from "express";
import * as bodyParser from "body-parser";
import * as logger from 'morgan';
import * as cors from 'cors';


class App {

  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    const options: cors.CorsOptions = {
      allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
      credentials: true,
      methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
      origin: '*',
      preflightContinue: false
    };
    this.app.use(cors(options));
    this.app.options('*', cors(options));
    this.app.use(logger('dev'));
    this.app.use(bodyParser.urlencoded({
      limit: '150mb',
      extended: true
    }));
    this.app.use(bodyParser.json({ limit: '50mb' }));
  }

}

export default new App().app;