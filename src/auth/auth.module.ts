import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { googleOAuthConfig } from './config/google-oauth.config';

@Module({
  imports: [ConfigModule.forFeature(googleOAuthConfig)],
})
export class AuthModule {}
