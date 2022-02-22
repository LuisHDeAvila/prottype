import { Router } from 'express'
const router = Router()

import * as authCtrl from '../controllers/'

router.post('/signup')
router.post('/signin')

export default router;