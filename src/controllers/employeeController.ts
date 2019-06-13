import { Request, Response } from 'express';
import { Controller, Middleware, Get, Put, Post, Delete } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { cerr, cinfo, cwarn, cimp } from 'simple-color-print';

@Controller('employee/')
export class EmployeeController {
  private genericRes: object = {
    code: 'string',
    data: {},
    error_status: false,
    message: 'string',
  };
  constructor() {
    cinfo(`Employee As Controller`);
  }

  @Get('list')
  private getEmployee(req: Request, res: Response) {
    res.status(200).json({...this.genericRes});
  }

  @Get('list/:id')
  private getEmployeeById(req: Request, res: Response) {
    res.status(200).json({...this.genericRes});
  }

  @Post('list')
  private addEmployee(req: Request, res: Response) {
    res.status(200).json({...this.genericRes});
  }

  @Delete('list/:id')
  private deleteEmployee(req: Request, res: Response) {
    res.status(200).json({...this.genericRes});
  }

}
