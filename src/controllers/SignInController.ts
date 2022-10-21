export class SignInController {
    async handle(httpRequest: any) {
        if (!httpRequest.body.user) {
            return {
                statusCode: 400
            }
        }
        return {}
    }
}
