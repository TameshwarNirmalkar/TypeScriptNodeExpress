import { Request, Response } from 'express';
import { Controller, Middleware, Get, Put, Post, Delete } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { cerr, cinfo, cwarn, cimp } from 'simple-color-print';


@Controller('api/users')
export class MainController {

    private readonly logger: Logger;


    constructor() {
        this.logger = new Logger();
    }


    @Get(':msg')
    private getMessage(req: Request, res: Response): void {

        this.logger.info(`Get Message ${req.params.msg}`);
        cinfo(`Get Message ${req.params.msg}`);
        res.status(200).json({msg: req.params.msg});
    }

    @Put(':msg')
    private putMessage(req: Request, res: Response): void {

        this.logger.info(req.params.msg);
        cinfo(req.params.msg);
        res.status(200).json({msg: req.params.msg});
    }

    @Post(':msg')
    private postMessage(req: Request, res: Response): void {

        this.logger.info(req.params.msg);
        cinfo(req.params.msg);
        res.status(200).json({msg: req.params.msg});
    }

    @Delete(':msg')
    private delMessage(req: Request, res: Response): void {

        try {

            throw new Error(req.params.msg);

        } catch (err) {
            this.logger.err(err, true);
            cerr(err);
        }

        res.status(200).json({msg: req.params.msg});
    }
}
