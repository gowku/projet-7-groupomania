import { Router } from "express";
import { signup, login, remove } from "../controllers/user.js";

const router = Router();

router.post(`/signup`, signup);
router.post(`/login`, login);
router.delete(`/user/:id`, remove);

export default router;
