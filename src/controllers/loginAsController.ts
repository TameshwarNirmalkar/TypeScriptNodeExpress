import { Request, Response } from 'express';
import { Controller, Middleware, Get, Put, Post, Delete } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { cerr, cinfo, cwarn, cimp } from 'simple-color-print';

@Controller('controlcenter/')
export class LoginAsController {
  private genericRes: object = {
    code: 'string',
    data: {},
    error_status: false,
    message: 'string',
  };
  constructor() {
    cinfo(`Login As Controller`);
  }

  @Get('user/loginAs/api/:version')
  private getAssignment(req: Request, res: Response) {
    res.status(200).json({...this.genericRes});
  }

  @Post('user/loginAs/api/:version')
  private assignRole(req: Request, res: Response) {
    res.status(200).json({...this.genericRes});
  }

  @Delete('user/loginAs/api/:version')
  private deleteLoginAs(req: Request, res: Response) {
    res.status(200).json({...this.genericRes});
  }

}
