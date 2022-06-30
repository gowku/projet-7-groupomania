import { Router } from "express";
import { auth } from "../middleware/auth.js";
import { MulterProfil } from "../middleware/multer-config.js";
import { signup, login, remove, modifyProfil, getOneUser } from "../controllers/user.js";
import isAdmin from "../middleware/isAdmin.js";

const router = Router();

router.post(`/signup`, signup);
router.post(`/login`, login);
router.get("/:userId", auth, getOneUser);
router.put(`/:userId`, auth, isAdmin, MulterProfil, modifyProfil);
router.delete(`/:userId`, remove);

export default router;
