import { Login } from './Login';
import { SignInServiceInterface } from './SignInServiceInterface';
import { SignInRepository } from '../repository/SignInRepository';

export class SignInService implements SignInServiceInterface {
    constructor(private readonly repository: SignInRepository) { }

    async execute(login: Login): Promise<boolean> {
        const findLogin = await this.repository.find(login);

        if (!findLogin || login.user !== findLogin.user || login.password !== findLogin.password) {
            return false
        }

        return true
    }

}