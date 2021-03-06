import { Router } from "express";
import { auth } from "../middleware/auth.js";
import { commentPost, modifyComment, deleteComment } from "../controllers/comment.js";

const router = Router();

router.post(`/:postId`, auth, commentPost);
router.put(`/:postId/:commentId`, auth, modifyComment);
router.delete(`/:userId/:postId/:commentId`, auth, deleteComment);

export default router;
