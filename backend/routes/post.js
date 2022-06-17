import { Router } from "express";
import { auth } from "../middleware/auth.js";
import { MulterPost } from "../middleware/multer-config.js";
import { getAllPost, createPost, modifyPost, deletePost } from "../controllers/post.js";

const router = Router();

router.get(`/`, auth, getAllPost);
router.post(`/`, auth, MulterPost, createPost);

router.put(`/:postId`, auth, MulterPost, modifyPost);

router.delete(`/:postId`, auth, MulterPost, deletePost);

export default router;
