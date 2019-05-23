import { Request, Response } from 'express';
import { Controller, Middleware, Get, Put, Post, Delete } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { cerr, cinfo, cwarn, cimp } from 'simple-color-print';

@Controller('controlcenter/')
export class UserController {
  private genericRes: object = {
    code: 'string',
    data: {},
    error_status: false,
    message: 'string',
  };
  constructor() {
    cinfo(`User Controller`);
  }

  @Put('user/:user_id/activation/:version')
  private userActivation(req: Request, res: Response): void {
    res.status(200).json({msg: req.params.user_id});
  }

  @Get('user/:userCode/:version')
  private getUsersCompanyDepartmentRoleWiseList(req: Request, res: Response) {
    res.status(200).json({...this.genericRes});
  }

  @Get('user/department/:userCode/:version')
  private getDepartmentList(req: Request, res: Response) {
    res.status(200).json({...this.genericRes});
  }

  @Get('user/encdec/:userCode/:version')
  private getEncDecFieldList(req: Request, res: Response) {
    res.status(200).json({...this.genericRes});
  }

  @Get('user/role/:userCode/:version')
  private getRoleList(req: Request, res: Response) {
    res.status(200).json({...this.genericRes});
  }

  @Get('user/userencdec/:userCode/:version')
  private getUsersEncDecFieldList(req: Request, res: Response) {
    res.status(200).json({...this.genericRes});
  }

  @Post('user/:userCode/:version')
  private createUser(req: Request, res: Response) {
    res.status(200).json({...this.genericRes});
  }

  @Post('user/role/:userCode/:version')
  private createRole(req: Request, res: Response) {
    res.status(200).json({...this.genericRes});
  }

  @Post('user/changeDepartmentRole/:userCode/:version')
  private changeUserDepartmentAndRole(req: Request, res: Response) {
    res.status(200).json({...this.genericRes});
  }

  @Post('user/userencdec/:userCode/:version')
  private updateUsersEncDecFieldList(req: Request, res: Response) {
    res.status(200).json({...this.genericRes});
  }

}
