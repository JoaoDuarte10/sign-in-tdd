import { SignInService } from '../../src/service/SignInService';
import { Login } from '../../src/service/Login';
import { SignInServiceInterface } from '../../src/service/SignInServiceInterface';
import { SignInRepository } from '../../src/repository/SignInRepository';

describe('SignInService', () => {
    let sut: SignInServiceInterface;
    let signInRepository: SignInRepository;

    beforeEach(() => {
        signInRepository = {
            find: (login: Login) => Promise.resolve({ user: 'any_user', password: 'any_password' })
        }
        sut = new SignInService(signInRepository);
    })

    it('Should return false when user is invalid', async () => {
        const login = {
            user: 'any_user',
            password: 'any_password'
        }

        const result = await sut.execute(login);

        expect(result).toBeFalsy();
    });
})