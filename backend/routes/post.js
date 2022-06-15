import { Router } from "express";
import { auth } from "../middleware/auth.js";
import { Multer } from "../middleware/multer-config.js";
import { getAllPost, createPost, modifyPost, deletePost } from "../controllers/post.js";

const router = Router();

router.get(`/`, auth, getAllPost);
router.post(`/`, auth, Multer, createPost);

router.put(`/:postId`, auth, Multer, modifyPost);

router.delete(`/:postId`, auth, Multer, deletePost);

export default router;
