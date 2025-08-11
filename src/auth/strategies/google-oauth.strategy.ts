import { Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { googleOAuthConfig } from '../config/google-oauth.config';

@Injectable()
export class GoogleOAuthStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject(googleOAuthConfig.KEY)
    private googleOAuthConfiguration: ReturnType<typeof googleOAuthConfig>,
  ) {
    super({
      clientID: googleOAuthConfiguration.clientID,
      clientSecret: googleOAuthConfiguration.clientSecret,
      callbackURL: googleOAuthConfiguration.redirectURI,
      scope: ['email', 'profile'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ) {
    console.log({ profile });
    // const user = await this.authService.validateGoogleUser({
    //   email: profile.emails[0].value,
    //   firstName: profile.name.givenName,
    //   lastName: profile.name.familyName,
    //   avatarUrl: profile.photos[0].value,
    //   password: '',
    // });
    // done(null, user);
    // return user;
    return null;
  }
}
