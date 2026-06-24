import express from 'express'
const router = express.Router()

import {nameOfItems, InputItems} from '../controllers/ShoppingListController.js'

router.get('/name', nameOfItems)
router.get('/item', InputItems)

export default router