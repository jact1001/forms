/**
Add to package.json (form-api) the script 
"user-repo": "ts-node src/infraestructure/scripts/user-repo-script.ts",
"form-repo": "ts-node src/infraestructure/scripts/form-repo-script.ts",
*/

import { IForm, ISection } from '../../core/domain/form';
import { FormsRepositorySQL } from '../repository/forms-repository/forms-repository-sql';

import to from 'await-to-js';
import { FormFakeData } from './form-fake';

class FormRepoScript {

    private formData : FormFakeData = new FormFakeData();

    constructor(
        private _formsRepositorySql : FormsRepositorySQL
    ) {}

    public async create () {
        const [err, response] =   await to(this._formsRepositorySql.saveForm(this.formData.getFormFake()));
        
        if (err && err instanceof Error) {
            console.log(`error create new data fake -> ${err.message}`);
        }

        if (response) {
            console.log(`create new form -> ${JSON.stringify(response)}`);
        }
    }

    public async findAll () {
        const data = await this._formsRepositorySql.findForms();
        
        data.forEach( (form: IForm) => {
            const x = {...form};
            delete x.sections;
            console.log(x)

            form.sections.forEach((section : ISection) => {
                const y = {...section};
                delete y.fields;
                console.log(y);

                section.fields.forEach(f => console.log(f));
            });
        })
    }

    public async getForm () {
        const id = "cltq7lhsc0000u1i7mntin7z7";
        const [err, response] = await to(this._formsRepositorySql.findForm(id));
        if (err && err instanceof Error) {
            console.log(`error get form -> ${err.message}`);
        }

        console.log(response);
    }

    public async updateForm () {
        const id = "cltq7lhsc0000u1i7mntin7z7";
        const update = this.formData.getFormFake();
        update.id = id;
        const [err, response] = await to(this._formsRepositorySql.updateForm(update));
        if (err && err instanceof Error) {
            console.log(`error update form -> ${err.message}`);
        }

        console.log(response);
    }
}

async function run () {

    try {
        const main = new FormRepoScript(new FormsRepositorySQL());
        
        await main.create();
        await main.findAll();
        // await main.getForm();
        // await main.updateForm();
        // await main.getForm();
        
    } catch (error) {
        console.log(`error main ${error.message}`);
    }
    
}

run();