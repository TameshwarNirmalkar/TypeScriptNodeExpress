import { Request, Response } from 'express';
import { Controller, Middleware, Get, Put, Post, Delete } from '@overnightjs/core';
import { cerr, cinfo, cwarn, cimp } from 'simple-color-print';

import { connect, connection, Connection, model, Model, Document } from 'mongoose';

// import { IModels } from '../models/model';
// import employeeSchema from '../schemas/employeeSchema';
// import { IEmployeeInterface } from '../interfaces/employeeInterface';

import employeeModel from '../models/employeeModels';

@Controller('employee/')
export class EmployeeController {
  private genericRes: object = {
    code: 'string',
    data: {},
    error_status: false,
    message: 'string',
  };

  constructor() {
    cinfo(`Employee As Controller: ${process.env.EMPLOYEE_DB}`);
  }

  @Get('list')
  private getEmployee(req: Request, res: Response) {
    // const connection = mongoose.connect(this.mongoUrl, { useNewUrlParser: true });
    // const empData = mongoose.model<IEModel>('employee', employeeSchema);
    // const empData = model<employeeModel>('employee', employeeSchema);
    employeeModel.find({}, (err: any, data: any) => {
      const fd =  data;
      if (err) {
        cwarn(`Err: ${err}`);
        res.status(500).json({ ...err });
      } else {
          cwarn(`${fd}`);
          res.send(fd);
      }
    });
  }

  @Get('list/:id')
  private getEmployeeById(req: Request, res: Response) {
    res.status(200).json({ ...this.genericRes });
  }

  @Post('list')
  private addEmployee(req: Request, res: Response) {
    res.status(200).json({ ...this.genericRes });
  }

  @Delete('list/:id')
  private deleteEmployee(req: Request, res: Response) {
    res.status(200).json({ ...this.genericRes });
  }

}
