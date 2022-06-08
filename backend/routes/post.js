import { Router } from "express";
import { auth } from "../middleware/auth.js";
import { Multer } from "../middleware/multer-config.js";
import {
  getAllPost,
  createPost,
  postLiked,
  commentPost,
  modifyPost,
  modifyComment,
  deletePost,
  deleteComment,
  modifyPassword,
} from "../controllers/post.js";

const router = Router();

router.get(`/`, auth, getAllPost);
router.post(`/`, auth, Multer, createPost);
// router.post(`/post:id/like`, auth, postLiked);
// router.post(`/post:id/coment`, auth, commentPost);
router.put(`/:postId`, auth, Multer, modifyPost);
// router.put(`/post:id/coment`, auth, modifyComment);
// router.delete(`/post:id`, auth, deletePost);
// router.delete(`/post:id/coment`, auth, deleteComment);
// router.put(`/user:id`, auth, modifyPassword);

export default router;
