import { IField, IRadio } from '../../core/domain/form-fields';
import { IForm } from '../../core/domain/form';
import { faker } from '@faker-js/faker';
import { IRole, IUser } from 'src/core/domain/user';

export class UserFakeData {
    public getUserFake ():IUser {
        const role : IRole = {
            _id: "123",
            name: "user",
        }

        return {
            _id: faker.string.uuid(),
            user_name: faker.person.firstName(),
            last_name: faker.person.lastName(),
            email: faker.word.words(1).concat("@.gmail.com"),
            number_id: faker.word.words(1),
            role
        };
    }
}