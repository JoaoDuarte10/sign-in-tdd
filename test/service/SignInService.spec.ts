import { SignInService } from '../../src/service/SignInService';
import { Login } from '../../src/service/Login';
describe('SignInService', () => {
    it('Should return false when user is invalid', async () => {
        const login = {
            user: 'any_user',
            password: 'any_password'
        }
        const signInRepository = {
            find: (login: Login) => Promise.resolve({ user: 'any_user', password: 'any_password' })
        }
        const service = new SignInService(signInRepository);

        const result = await service.execute(login);

        expect(result).toBeFalsy();
    });
})