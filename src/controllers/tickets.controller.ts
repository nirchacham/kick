import {Request, Response} from 'express';
import TicketsHandler from '../handlers/tickets.handler';

export default class TicketsController {
    static async getTicketsByTitle(req:Request, res: Response) {
        const search = req.query.search as string;
        const result = await TicketsHandler.getTicketsByTitle(search);
        res.status(result.status).send(result.data);
    }

    static async getAllTickets(req:Request, res: Response) {
        const search = req.query.search as string;
        const result = await TicketsHandler.getAllTickets(search);
        res.status(result.status).send(result.data);
    }

    static async getFilteredTickets(req: Request, res: Response) {
        const from = req.query.from as string;
        const to = req.query.to as string;
        
        const result = await TicketsHandler.getFilteredTickets(from,to);
        res.status(result.status).send(result.data);
    }
}