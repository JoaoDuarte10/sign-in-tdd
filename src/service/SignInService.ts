import { Login } from './Login';
import { SignInServiceInterface } from './SignInServiceInterface';
import { SignInRepository } from '../repository/SignInRepository';

export class SignInService implements SignInServiceInterface {
    constructor(private readonly repository: SignInRepository) { }

    async execute(login: Login): Promise<boolean> {
        const findLogin = await this.repository.find(login);

        if (login.user !== findLogin.user) {
            return false
        }
    }

}