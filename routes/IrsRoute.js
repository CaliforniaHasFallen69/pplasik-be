import express from "express";
import {
  getIrs,
  getIrsById,
  createIrs,
    updateIrs,
  //   deleteUser,
} from "../controllers/Irs.js";
import { getMahasiswa } from "../controllers/Mahasiswa.js";
import { isAuthenticated, isMahasiswa } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/irs",isAuthenticated, isMahasiswa, getIrs);
router.get("/irs/:id", isAuthenticated, getIrsById);
router.post("/irs", isAuthenticated, isMahasiswa, createIrs);
router.put("/irs",isAuthenticated, updateIrs);
// router.delete("/operator/:id", deleteUser);
export default router;
