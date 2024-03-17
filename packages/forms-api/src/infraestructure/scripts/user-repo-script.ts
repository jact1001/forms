/**
Add to package.json (form-api) the script 
"user-repo": "ts-node src/infraestructure/scripts/user-repo-script.ts",
"form-repo": "ts-node src/infraestructure/scripts/form-repo-script.ts",
*/

import { UsersRepositorySQL } from '../repository/users-repository/users-repository-sql';
import to from 'await-to-js';
import { UserFakeData } from './user-fake-data';


class UserRepoScript {
    private userRandom : UserFakeData = new UserFakeData();

    constructor(private _repo : UsersRepositorySQL) {}

    public async save () {
        const data = this.userRandom.getUserFake();
        data.email = "hansarias74@gmail.com";
        const [err, response] =   await to(this._repo.saveUser(data));
        
        if (err && err instanceof Error) {
            console.log(`error create new data fake -> ${err.message}`);
        }

        console.log(`create new user -> ${JSON.stringify(response)}`);
    }

    public async find (email : string) {
        const data = await this._repo.findUsers(email);
        console.log(data);
    }

    public async findByEmail (email: string) {
        const [err, response] = await to(this._repo.findUserByEmail(email));
        if (err && err instanceof Error) {
            console.log(`error get user -> ${err.message}`);
        }

        if (response) console.log(response);
    }
}

async function run () {

    try {
        const repo = new UserRepoScript(new UsersRepositorySQL());
        await repo.save();

        const email ="hansarias74@gmail.com";
        await repo.find(email);
        await repo.findByEmail(email);
    } catch (error) {
        console.log(`error main ${error.message}`);
    }
}

run();