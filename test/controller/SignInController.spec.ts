import { SignInController } from '../../src/controllers/SignInController';

describe('SignInController', () => {
    it('Should return status code 400 if no user is provided', async () => {
        const controller = new SignInController();

        const httpRequest = {
            body: {
                password: 'any_password'
            }
        };

        const result = await controller.handle(httpRequest);

        expect(result.statusCode).toBe(400);
    });
});
