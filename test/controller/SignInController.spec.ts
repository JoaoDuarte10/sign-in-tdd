import { SignInController } from '../../src/controllers/SignInController';
import { Controller } from '../../src/controllers/Controller';
import { SignInServiceInterface } from '../../src/service/SignInServiceInterface';

describe('SignInController', () => {
    let sut: Controller;
    let signInService: SignInServiceInterface;

    beforeEach(() => {
        signInService = {
            execute: () => Promise.resolve(true)
        }
        sut = new SignInController(signInService);
    });

    it('Should return status code 400 if no user is provided', async () => {
        const httpRequest = {
            body: {
                password: 'any_password'
            }
        };

        const result = await sut.handle(httpRequest);

        expect(result.statusCode).toBe(400);
    });

    it('Should return status code 400 if no password is provided', async () => {
        const httpRequest = {
            body: {
                user: 'user_password'
            }
        };

        const result = await sut.handle(httpRequest);

        expect(result.statusCode).toBe(400);
    });

    it('Should return status code 200 if valid login', async () => {
        const httpRequest = {
            body: {
                user: 'any_user',
                password: 'any_password'
            }
        };

        const result = await sut.handle(httpRequest);

        expect(result.statusCode).toBe(200);
    });
});
