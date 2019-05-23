// import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import cors from 'cors';

import * as controllers from './controllers';

import { Server } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';


class MainServer extends Server {

    private readonly logger: Logger = new Logger();
    private readonly SERVER_STARTED = 'Main server started on http://127.0.0.1:';


    constructor() {
        super();
        this.setupConfig();
        this.setupControllers();
    }

    private setupControllers(): void {
        const ctlrInstances: any[] = [];
        for (const name in controllers) {
            if (controllers.hasOwnProperty(name)) {
                const controller = (controllers as any)[name];
                ctlrInstances.push(new controller());
            }
        }
        super.addControllers(ctlrInstances);
    }

    public start(port: number): void {

        this.app.get('/', (req, res) => {
            res.send({ message: `${this.SERVER_STARTED}${port}` });
        });

        this.app.listen(port, () => {
            this.logger.imp(`${this.SERVER_STARTED}${port}`);
        });
    }

    private setupConfig() {
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
        // this.logger.warn(`Name: ${this.app.get}`);
    }
}

export default MainServer;
