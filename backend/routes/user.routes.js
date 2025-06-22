import express from "express";
import controller from '../controllers/user.controller.js'; // ✅
const router=express.Router();

router.get("/search",controller.search_if_present);
router.get("/random",controller.get_random_five);
export default router;