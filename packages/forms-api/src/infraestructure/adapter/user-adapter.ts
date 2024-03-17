import { Prisma } from "@prisma/client";
import { IRole, IUser } from "src/core/domain/user";

export class UserAdapter {
  private static mapToRole(
    data: IRole
  ): any {
    if (!data) return {} as any;

    return {
      create: {
        name: data.name,
      },
    };
  }

  static toPrismaCreate(user: IUser): Prisma.UserCreateInput {
    const data: Prisma.UserCreateInput = {
      user_name: user.user_name,
      last_name: user.last_name,
      email: user.email,
      number_id: user.number_id,
      role: JSON.stringify(user.role),
    };

    return data;
  }

  static toIUser(user: any): IUser {
    console.log(`user ${JSON.stringify(user)}`);
    const data: IUser = {
      _id: user.id,
      user_name: user.user_name,
      number_id: user.number_id,
      last_name: user.last_name,
      email: user.email
    }

    return data;
  }
}
