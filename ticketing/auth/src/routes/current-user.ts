import { Router } from 'express';

const router = Router();

router.get('/api/users/currentuser', () => {});

export { router as currentUserRouter };