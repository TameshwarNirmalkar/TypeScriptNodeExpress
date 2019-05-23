import { Request, Response } from 'express';
import { Controller, Middleware, Get, Put, Post, Delete } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { cerr, cinfo, cwarn, cimp } from 'simple-color-print';

@Controller('controlcenter/')
export class UserRfidAssignmentController {
  private genericRes: object = {
    code: 'string',
    data: {},
    error_status: false,
    message: 'string',
  };
  constructor() {
    cinfo(`User Rfid Assignment Controller`);
  }

  @Get('users/rfidassignments/:version')
  private getUserRfidAssignments(req: Request, res: Response) {
    res.status(200).json({...this.genericRes});
  }

  @Post('users/rfidassignments/:userCode/:version')
  private addUpdateUserRfidAssignment(req: Request, res: Response) {
    res.status(200).json({...this.genericRes});
  }

  @Delete('users/rfidassignments/:userCode/:version')
  private removeUserRfidAssignment(req: Request, res: Response) {
    res.status(200).json({...this.genericRes});
  }

}
