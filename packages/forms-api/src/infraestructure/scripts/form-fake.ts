import { IField } from '../../core/domain/form-fields';
import { IForm } from '../../core/domain/form';
import { faker } from '@faker-js/faker';

export class FormFakeData {
    public getFormFake ():IForm {
        const field: IField = {
            value: faker.word.words(),
            field_id: faker.string.uuid(),
            form_field_id: faker.string.uuid(),
            isRequired: false,
            type: faker.word.words(),
            label: faker.word.words(),
            placeholder: faker.word.words(),
            maxLength: '',
            label_placeholder: faker.word.words(),
            minLength: '',
            rows: '',
            options: [],
            option_placeholder: faker.word.words(),
            name: '',
            checked: false,
            values: [],
            min: ''
        }

        const data: IForm = {
            id: faker.string.uuid() as any,
            form_name: faker.word.words() as any,
            state: 'ok',
            author: faker.person.firstName() as any,
            sections: [
                {
                    id: faker.string.uuid() as any,
                    sectionName: faker.word.words() as any,
                    access: [
                        {
                            userId: faker.string.uuid() as any,
                            userName: faker.person.firstName() as any,
                            permission: [
                                faker.word.words(), faker.word.words()
                            ]
                        }
                    ],
                    fields: [ field],
                }
            ]
        }

        return data;
    }
}