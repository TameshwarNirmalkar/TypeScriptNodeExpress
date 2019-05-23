import { Request, Response } from 'express';
import { Controller, Middleware, Get, Put, Post, Delete } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { cerr, cinfo, cwarn, cimp } from 'simple-color-print';

@Controller('controlcenter/')
export class OrgRolePermissionController {
  private genericRes: object = {
    code: 'string',
    data: {},
    error_status: false,
    message: 'string',
  };
  constructor() {
    cinfo(`Organization Role Permissions Controller`);
  }

  @Get('orgs/roles/permissions/:version')
  private getPermissions(req: Request, res: Response) {
    res.status(200).json({...this.genericRes});
  }

  @Put('orgs/roles/permissions/:version')
  private assignPermissions(req: Request, res: Response) {
    res.status(200).json({...this.genericRes});
  }

  @Delete('orgs/roles/permissions/:version')
  private removePermissions(req: Request, res: Response) {
    res.status(200).json({...this.genericRes});
  }

}
