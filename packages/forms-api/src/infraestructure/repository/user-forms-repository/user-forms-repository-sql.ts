import {Injectable, OnDestroy} from "@tsed/common";

import {IUserFormsRepositoryPort} from "../../../core/ports/user-forms-ports/user-forms-repository-port";
import {IFormCase, IUserForm} from "../../../core/domain/user-forms";
// import {PrismaClient} from "@prisma/client";

// const prisma = new PrismaClient()

@Injectable()
export class UserFormsRepositorySQL implements IUserFormsRepositoryPort, OnDestroy {


    public async saveUserForm(email: string, userForm: IUserForm) {
        /*const userForms = await prisma.userForms.findMany({
            where: {                user_id: email            }
        });
        if(!userForms){
            const newUserForms = await prisma.userForms.create({
                data:{

                }
            })
        }

        return {

        }*/
        return null
    }

    public async addUseCase(formCase: IFormCase, formId: string, email: string) {
        return null;
    }

    public async findUserForms(email: string) {
        return null;
    }

    public async updateUseCase(formCase: IFormCase, formId: string, email: string) {

        return null;
    }

    $onDestroy(): void | Promise<any> {
        throw new Error("Method not implemented.");
    }
}
