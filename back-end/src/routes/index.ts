import { Router } from "express";
import generatePasswordRouter from "./generatePasswordRoutes";

const router = Router();

router.use(generatePasswordRouter);

export default router;
