import { Router } from "express";
import { findAll, save, update, remove } from "../services/todo.service";

const router = Router();

router.post('/' , save)
router.get('/' , findAll)
router.put('/:id', update)
router.delete('/:id' , remove)

export default router;
