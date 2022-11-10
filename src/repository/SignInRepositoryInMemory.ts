import { SignInRepository } from './SignInRepository';
import { Login } from '../service/Login';

export class SignInRepositoryInMemory implements SignInRepository {
    private login: Login[] = [
        {
            user: 'User1',
            password: '123456',
        },
        {
            user: 'User2',
            password: '123456',
        },
        {
            user: 'User3',
            password: '123456',
        }
    ];

    async find(params: Login): Promise<Login> {
        return Promise.resolve(this.login.find(login => login.user === params.user || login.password === params.password))
    }
}
