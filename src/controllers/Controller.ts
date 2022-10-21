export type HttpRequest = {
    body: any
}

export type HttpResponse = {
    statusCode: number;
}

export interface Controller {
    handle(httpRequest: HttpRequest): Promise<HttpResponse>
}