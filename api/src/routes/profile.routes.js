import { Router } from 'express'
import authenticateMiddleware from "../middlewares/authenticate.middleware.js";
import {getProfile} from "../controllers/profile.controller.js";

const router = Router();

router.get('/', authenticateMiddleware, getProfile)

export default router;
