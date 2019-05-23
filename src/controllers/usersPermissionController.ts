import { Request, Response } from 'express';
import { Controller, Middleware, Get, Put, Post, Delete } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { cerr, cinfo, cwarn, cimp } from 'simple-color-print';

@Controller('controlcenter/')
export class UserPermissionController {
  private genericRes: object = {
    code: 'string',
    data: {},
    error_status: false,
    message: 'string',
  };
  constructor() {
    cinfo(`User Permission Controller`);
  }

  @Get('users/:user_id/forgot-password/:version')
  private forgotPassword(req: Request, res: Response): void {
    res.status(200).json({msg: req.params.user_id});
  }

  @Get('users/permissions/:version')
  private getPermissions(req: Request, res: Response) {
    res.status(200).json({...this.genericRes});
  }

  @Put('users/permissions/:version')
  private assignPermissions(req: Request, res: Response) {
    res.status(200).json({...this.genericRes});
  }

  @Delete('users/permissions/:version')
  private removePermissions(req: Request, res: Response) {
    res.status(200).json({...this.genericRes});
  }

}
