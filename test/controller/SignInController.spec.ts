import { SignInController } from '../../src/controllers/SignInController';
import { Controller } from '../../src/controllers/Controller';

describe('SignInController', () => {
    let sut: Controller;

    beforeEach(() => {
        sut = new SignInController();
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
});
