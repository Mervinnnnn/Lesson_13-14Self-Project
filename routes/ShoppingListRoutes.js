import express from 'express'
const router = express.Router()

import {nameOfItems, InputItems, SaveItems, deletData, editData, updatedData} from '../controllers/ShoppingListController.js'

router.get('/name', nameOfItems)
router.get('/item', InputItems)
router.post('/item', SaveItems)
router.post('/delete/:id', deletData)
router.get('/editData/:id', editData)
router.post('/editData/:id', updatedData)


export default router