import { Login } from '../service/Login';

export interface SignInRepository {
    find(login: Login): Promise<Login>
}