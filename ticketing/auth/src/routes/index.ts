import { Router } from 'express';

import { currentUserRouter } from './current-user'
import { signinRouter } from './signin'
import { signupRouter } from './signup'
import { signoutRouter } from './signout'

const router = Router()
router.use(currentUserRouter)
router.use(signinRouter)
router.use(signupRouter)
router.use(signoutRouter)

export default router