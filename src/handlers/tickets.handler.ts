import TicketsResponse from '../responses/tickets.response';
import DatabaseHandler from './db.handler';
import {searchParam} from '../types/searchParam.type';

export default class TicketsHandler {
    static async getTicketsByTitle(searchParameter: searchParam) {
        try{
            const result = await DatabaseHandler.getTicketsFromDb(searchParameter,['title']);

            if(result.length){
                return new TicketsResponse(200,result);
            }
            return new TicketsResponse(200,[]);
        } catch(error) {
            console.error('Could not get tickets: ',error);
            return new TicketsResponse(404,[]);
        }
    }

    static async getFilteredTickets(from: searchParam, to:searchParam) {
        try{
            const result = await DatabaseHandler.getFilteredTicketsFromDb(from, to)
            if(result.length){
                return new TicketsResponse(200,result);
            }
            return new TicketsResponse(200,[])
        } catch(error) {
            console.error('Could not get filtered tickets: ',error);
            return new TicketsResponse(404,[]);
        }

    }

    static async getAllTickets(searchParameter: searchParam) {
        try{
            const result = await DatabaseHandler.getTicketsFromDb(searchParameter,['title','content','userEmail']);
            if(result.length){
                return new TicketsResponse(200,result);
            }
            return new TicketsResponse(200,[]);
        } catch(error) {
            console.error('Could not get tickets: ',error);
            return new TicketsResponse(404,[]);
        }
    }
}