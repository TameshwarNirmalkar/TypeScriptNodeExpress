import { Request, Response } from 'express';
import { Controller, Middleware, Get, Put, Post, Delete } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { cerr, cinfo, cwarn, cimp } from 'simple-color-print';

@Controller('controlcenter/')
export class AuthenticationController {

  private loginSuccess: object = {
    app_code: 13,
    app_name: 'solitaire-admin',
    device_details: {
      country_code: 'IN',
      device_type: 'Computer',
      ip: '45.64.213.226',
      model: 'string',
      name: 'Chrome',
      version: 72,
    },
    login_name: 'ritesh.khatri',
    org_name: 'srkexports',
    otp: '432423fskaltke4234fdfff32434fdf',
  };

  constructor() {
    cinfo(`Authentication Controller`);
  }


  @Get('token/otp/:version')
  private generateOtpForToken(req: Request, res: Response): void {
    res.status(200).json({ msg: req.params.version });
  }

  @Get('logout/:version')
  private deleteToken(req: Request, res: Response): void {
    res.status(200).json({ msg: req.params.version });
  }

  @Post('login/:version')
  private userLogin(req: Request, res: Response): void {
    res.status(200).json(Object.assign({}, this.loginSuccess, { token: req.params.version }));
  }

  @Post('otp/:version')
  private validateOtp(req: Request, res: Response) {
    res.status(200).json({ ...this.loginSuccess });
  }

  @Post('token/otp/:version')
  private verifyToken(req: Request, res: Response) {
    res.status(200).json({ ...this.loginSuccess });
  }

}


