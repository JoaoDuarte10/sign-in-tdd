import { Login } from './Login';

export interface SignInServiceInterface {
    execute(login: Login): Promise<boolean>
}