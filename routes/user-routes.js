import express from "express";
import { userLogin, getUser } from "../controllers/userController.js";

const router = express.Router();

router.post("/login", userLogin);
router.get("/", getUser);

export default router;
