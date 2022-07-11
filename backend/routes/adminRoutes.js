import { Router } from "express";
import { auth } from "../middleware/auth.js";
import isAdmin from "../middleware/isAdmin.js";
import { MulterPost } from "../middleware/multer-config.js";
import { adminDeleteUser, adminDeletePost, adminDeleteComment } from "../controllers/admin.js";

const router = Router();

router.delete(`/user/:userId`, auth, isAdmin, adminDeleteUser);
router.delete(`/post/:postId`, auth, isAdmin, adminDeletePost);
router.delete(`/comment/:commentId`, auth, isAdmin, adminDeleteComment);

export default router;
