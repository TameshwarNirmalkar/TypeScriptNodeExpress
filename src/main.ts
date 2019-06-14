// import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import cors from 'cors';
import { connect, connection, Connection, model, Model, Document } from 'mongoose';

import { Server } from '@overnightjs/core';
import { cwarn, cimp, cerr, cinfo } from 'simple-color-print';

import * as controllers from './controllers';

class MainServer extends Server {

  private readonly SERVER_STARTED = 'Main server started on http://127.0.0.1:';
  // private readonly mongoUrl: string = 'mongodb://localhost:27017/EmployeeDB';
  private readonly mongoUrl: string = `${process.env.EMPLOYEE_DB}`;
  private readonly _db: Connection = connection;


  constructor() {
    super();
    this.setupConfig();
    this.setupControllers();
  }

  private setupControllers(): void {
    const controllerInstances: any[] = [];
    for (const name of Object.keys(controllers)) {
      const controller = (controllers as any)[name];
      if (typeof controller === 'function') {
        controllerInstances.push(new controller());
      }
    }
    super.addControllers(controllerInstances, null, true);
  }

  public start(port: any): void {

    this.app.get('/', (req, res) => {
      res.send({ message: `${this.SERVER_STARTED}${port}` });
    });

    this.app.listen(port, () => {
      cwarn(`${this.SERVER_STARTED}${port}`);
    });
  }

  private setupConfig(): void {
    const options: cors.CorsOptions = {
      allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'X-Access-Token'],
      credentials: true,
      methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
      origin: '*',
      preflightContinue: false,
    };
    this.app.use(cors(options));
    this.app.options('*', cors(options));
    this.app.use(logger('common')); // dev, combined, tiny, common, short
    this.app.use(bodyParser.urlencoded({
      limit: '150mb',
      extended: true,
    }));
    this.app.use(bodyParser.json({ limit: '50mb' }));
    this.mongoSetup();
  }

  private mongoSetup(): void {
    connect(this.mongoUrl, { useNewUrlParser: true });
    this._db.on('open', this.connected);
    this._db.on('error', this.error);
  }

  private connected() {
    cimp('Mongoose has connected');
  }

  private error(error) {
    cimp(`Mongoose has errored, ${error}`);
  }
}

export default MainServer;
