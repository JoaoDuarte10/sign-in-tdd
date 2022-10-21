import { Controller, HttpRequest, HttpResponse } from './Controller';

export class SignInController implements Controller {
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        const requiredFields = ['user', 'password'];
        for (const field of requiredFields) {
            if (!httpRequest.body[field]) {
                return { statusCode: 400 }
            }
        }
        return {} as any
    }
}
