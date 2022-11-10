import express from 'express';
import { Router } from 'express';
import { adaptRoute } from './AdaptRoute';
import { makeSignInController } from './factory/SignInController';

const app = express();
const router = Router();

app.use(express.json());

router.post('/sign-in', adaptRoute(makeSignInController()));

app.use(router);

app.listen(5000, () => {
    console.log('Server is running');
});
