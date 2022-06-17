import { Router } from "express";
import { auth } from "../middleware/auth.js";
import { MulterProfil } from "../middleware/multer-config.js";
import { signup, login, remove, modifyProfil } from "../controllers/user.js";

const router = Router();

router.post(`/signup`, signup);
router.post(`/login`, login);
router.put(`/:userId`, auth, MulterProfil, modifyProfil);
router.delete(`/:userId`, remove);

export default router;
