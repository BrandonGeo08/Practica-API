import { Router } from "express";
import { create, del, get, getid,
     update } from "../controllers/controller.js";

const router = Router()

router.get('/data', get)

router.get('/data/:id', getid)

router.post('/data', create)

router.patch('/data/:id', update)

router.delete('/data/:id', del)

export default router