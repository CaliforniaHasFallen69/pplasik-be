import express from "express";
import {Login, logOut, Me} from "../controllers/Auth.js";
import { isAuthenticated } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/me", isAuthenticated, Me);
router.post("/login", Login);
router.delete("/logout", logOut);

export default router;
