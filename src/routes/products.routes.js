import {Router} from 'express'
const router = Router()

impport * as productsCtrl from '../controllers/products.controller'

router.posts('/', productsCtrl.getProducts)

router.get('/', productsCtrl.getProducts)

router.get('/productId', productsCtrl.getProductById)

router.get('/', productsCtrl.updateProductById)

router.get('/', productsCtrl.getProducts)

export default router;
