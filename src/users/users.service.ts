import { Inject, Injectable } from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { users as userSchema } from './users.schema';
import { DATABASE_CONNECTION } from '@database/database-connection';

@Injectable()
export class UsersService {
  constructor(
    @Inject(DATABASE_CONNECTION)
    private readonly db: NodePgDatabase<typeof userSchema>,
  ) {}

  async getUsers() {
    return this.db.query.users.findMany();
  }
}
