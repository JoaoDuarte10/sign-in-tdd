import { Controller, HttpRequest, HttpResponse } from './Controller';
import { SignInServiceInterface } from '../service/SignInServiceInterface';

export class SignInController implements Controller {
    constructor(private readonly signInService: SignInServiceInterface) { }

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        const requiredFields = ['user', 'password'];
        for (const field of requiredFields) {
            if (!httpRequest.body[field]) {
                return { statusCode: 400 }
            }
        }

        const { user, password } = httpRequest.body;

        const loginIsValid = await this.signInService.execute({ user, password });

        if (loginIsValid) {
            return { statusCode: 200 }
        }

        return {} as any
    }
}
