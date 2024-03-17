import { Injectable, OnDestroy } from "@tsed/common";
import { IUserRepositoryPort } from "../../../core/ports/users-ports/users-repository-port";
import { IUser } from "../../../core/domain/user";
import { PrismaClient } from "@prisma/client";
import { UserAdapter } from "./../../adapter/user-adapter";

import to from "await-to-js";

@Injectable()
export class UsersRepositorySQL implements IUserRepositoryPort, OnDestroy {
  private prisma: PrismaClient = new PrismaClient();

  public async findUsers(email: string): Promise<IUser[]> {
    const option = {
        where: {
          email: {
            notIn: [email]
          }
        },
        include: {
          role: true,
        },
      };
  
      const [err, listUser] = await to(this.prisma.user.findMany(option));
  
      if (err) {
        const msg: string = `Error user-repository-sql find-users ${err.message}`;
        console.log(msg);
        return Promise.reject(new Error(msg));
      }

      if (!listUser || listUser.length == 0) return Promise.resolve([]);
  
      const users = listUser.map((user: any) => UserAdapter.toIUser(user));
      return Promise.resolve(users);
  }

  public async saveUser(user: IUser): Promise<IUser> {
    const data = UserAdapter.toPrismaCreate(user);
    const [err, response] = await to(this.prisma.user.create({ data }));

    if (err) {
      const msg: string = `Error save-repository-sql save-form ${err.message}`;
      console.log(msg);
      return Promise.reject(new Error(msg));
    }

    return Promise.resolve(response);
  }

  public async findUserByEmail(email: string): Promise<IUser> {
    console.log(`findUserByEmail ${email}`);

    const option = {
        where: {
          email,
        },
        include: {
          role: true,
        },
      };
  
      const [err, user] = await to(this.prisma.user.findFirst(option));
  
      if (err) {
        const msg: string = `Error user-repository-sql find-user-by-email ${err.message}`;
        console.log(msg);
        return Promise.reject(new Error(msg));
      }

      console.log(`response ${user}`);

      if (!user) return Promise.reject(new Error(`user with the email ${email} not found`))
  
      return Promise.resolve(UserAdapter.toIUser(user));
  }

  async $onDestroy(): Promise<void | Promise<any>> {
    await this.prisma.$disconnect();
  }
}
