import { Inject, Injectable } from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { users as userSchema } from './schemas/users.schema';
import { DATABASE_CONNECTION } from '@database/database-connection';

@Injectable()
export class UsersService {
  constructor(
    @Inject(DATABASE_CONNECTION)
    private readonly db: NodePgDatabase<{ users: typeof userSchema }>,
  ) {}

  async getUsers() {
    return this.db.query.users.findMany();
  }

  async createUser(user: typeof userSchema.$inferInsert) {
    console.log('🚀 ~ UsersService ~ createUser ~ user:', user);
    await this.db.insert(userSchema).values(user);
  }
}
