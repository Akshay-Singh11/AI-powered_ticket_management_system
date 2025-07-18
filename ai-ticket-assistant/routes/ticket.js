import express from 'express';
import {authenticate} from "../middleware/auth.js";
import { createTicket, getTicket, getTickets } from "../controllers/ticket.js";

const router = express.Router();

router.post("/", authenticate, createTicket);
router.get("/getTickets", authenticate, getTickets);
router.get("/:id", authenticate, getTicket);


export default router;