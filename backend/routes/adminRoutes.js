import { Router } from "express";
import { auth } from "../middleware/auth.js";
import isAdmin from "../middleware/isAdmin.js";
import { adminDeleteUser, adminDeletePost, adminDeleteComment, getAllUser } from "../controllers/admin.js";

const router = Router();

router.get("/", auth, isAdmin, getAllUser);
router.delete(`/user/:userId`, auth, isAdmin, adminDeleteUser);
router.delete(`/post/:postId`, auth, isAdmin, adminDeletePost);
router.delete(`/comment/:commentId`, auth, isAdmin, adminDeleteComment);

export default router;
