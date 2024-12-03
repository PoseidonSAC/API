import { db } from "../../../core/config/db";
import { User } from "../entities/user";
export class UserRepository {
  async save(user: User) {
    return await db.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
        id_role: user.id_role,
      },
    });
  }
  async findByEmail(email: string) {
    return await db.user.findUnique({
      where: {
        email,
      },
      include: {
        role: true,
      },
    });
  }
}
