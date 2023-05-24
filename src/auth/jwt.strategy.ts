// import { PassportStrategy } from '@nestjs/passport';
// import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from './auth.service';
// import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
// // import { ConfigService } from '@nestjs/config';
// // import dotenv from 'dotenv';
// // dotenv.config();

// @Injectable()
// export class JwtStrategy extends PassportStrategy(Strategy) {
//   constructor(private readonly authService: AuthService) {
//     console.log('process.env.JWT_SECRETKEY', process.env.JWT_SECRETKEY);
//     super({
//       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//       ignoreExpiration: true,
//       secretOrPrivateKey: process.env.JWT_SECRETKEY,
//       // secretOrPrivateKey: configService.get('JWT_SECRETKEY'),
//     });
//   }

//   async validate(payload: JwtPayload): Promise<any> {
//     const user = await this.authService.validateUser(payload);
//     if (!user) {
//       throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
//     }
//     return user;
//   }
// }

export interface JwtPayload {
  email: string;
}

import { PassportStrategy } from '@nestjs/passport';
import { UnauthorizedException, Injectable } from '@nestjs/common';
// import { AuthUser } from './auth.user.interface';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // ignoreExpiration: process.env.NODE_ENV === 'local' ?? false,
      secretOrKey: process.env.JWT_SECRETKEY,
    });
  }

  async validate(payload: JwtPayload): Promise<any> {
    try {
      const user = await this.authService.validateUser(payload);
      if (!user) {
        throw new UnauthorizedException();
      }
      return user;
    } catch (error) {
      throw new UnauthorizedException();
    }
  }
}
