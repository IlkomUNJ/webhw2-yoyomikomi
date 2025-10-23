/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.on('/').render('pages/index')
router.on('/shop').render('pages/shop')
router.on('/product').render('pages/product')
router.on('/about').render('pages/about')
router.on('/contact').render('pages/contact')
router.on('/checkout').render('pages/checkout')
router.on('/seller').render('pages/seller')
router.on('/wishlist').render('pages/wishlist')

