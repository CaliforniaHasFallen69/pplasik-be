import express from "express";
import {
  getPkl,
  getPklById,
  createPkl,
  //   updateUser,
  //   deleteUser,
} from "../controllers/Pkl.js";
import { getMahasiswa } from "../controllers/Mahasiswa.js";
import { isAuthenticated, isMahasiswa } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/pkl", isAuthenticated, isMahasiswa, getPkl, getMahasiswa);
router.get("/pkl/:id", isMahasiswa, getPklById);
router.post("/pkl", isAuthenticated, isMahasiswa, createPkl);
// router.patch("/operator/:id", updateUser);
// router.delete("/operator/:id", deleteUser);
export default router;
