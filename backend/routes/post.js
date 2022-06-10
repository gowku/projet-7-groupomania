import { Router } from "express";
import { auth } from "../middleware/auth.js";
import { Multer } from "../middleware/multer-config.js";
import { getAllPost, createPost, postLiked, modifyPost, deletePost } from "../controllers/post.js";

const router = Router();

router.get(`/`, auth, getAllPost);
router.post(`/`, auth, Multer, createPost);
// router.post(`/:postId/like`, auth, postLiked);

router.put(`/:postId`, auth, Multer, modifyPost);

router.delete(`/:postId`, auth, deletePost);

// router.put(`/user:id`, auth, modifyPassword);

export default router;
