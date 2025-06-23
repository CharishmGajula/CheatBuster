import express from "express";
import controller from '../controllers/user.controller.js'; // ✅
const router=express.Router();
/**
 * @openapi
 * /search:
 *   get:
 *     summary: Search for a cheater by email
 *     parameters:
 *       - in: query
 *         name: email
 *         required: true
 *         schema:
 *           type: string
 *         description: Email address to check
 *     responses:
 *       200:
 *         description: Cheater found
 *       404:
 *         description: Not found
 *
 * /random:
 *   get:
 *     summary: Get 5 random cheaters
 *     responses:
 *       200:
 *         description: 5 random users returned
 */

router.get("/search", controller.search_if_present);
router.get("/random", controller.get_random_five);

export default router;