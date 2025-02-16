import { Router, Request, Response } from "express"; 
const router = Router();

router.get("/", (req: Request, res: Response, next) => {
    res.status(200).json({});
});

export default router; 