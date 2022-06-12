import { Router } from "express";
import { auth } from "../middleware/auth.js";
import { Multer } from "../middleware/multer-config.js";
import { signup, login, remove, modifyPassword } from "../controllers/user.js";

const router = Router();

router.post(`/signup`, signup);
router.post(`/login`, login);
router.put(`/:userId`, auth, modifyPassword);
router.delete(`/user/:id`, remove);

export default router;
