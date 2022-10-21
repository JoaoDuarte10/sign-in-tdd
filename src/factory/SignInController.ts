import { SignInRepositoryInMemory } from '../repository/SignInRepositoryInMemory';
import { SignInService } from '../service/SignInService';
import { SignInController } from '../controllers/SignInController';

export const makeSignInController = () => {
    const repository = new SignInRepositoryInMemory();
    const service = new SignInService(repository);
    return new SignInController(service);
}
