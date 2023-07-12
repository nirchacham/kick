import express from 'express';
import TicketsController from '../controllers/tickets.controller';
import { validateFromToParams } from '../middlewares/validateTestParams';
const router = express.Router();

router.get('/',TicketsController.getTicketsByTitle);
router.get('/searchAll',TicketsController.getAllTickets);
router.get('/filter',validateFromToParams,TicketsController.getFilteredTickets);

export default router;