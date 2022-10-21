import { Controller, HttpRequest, HttpResponse } from './Controller';

export class SignInController implements Controller {
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        if (!httpRequest.body.user) {
            return {
                statusCode: 400
            }
        }
        return {} as any
    }
}
