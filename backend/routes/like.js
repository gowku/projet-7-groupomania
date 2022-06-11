import { Router } from "express";
import { auth } from "../middleware/auth.js";
import { postLiked } from "../controllers/like.js";

const router = Router();

router.post(`/:postId`, auth, postLiked);

export default router;
