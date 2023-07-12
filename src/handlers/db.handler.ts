import tickets from '../public/data.json';
import {searchParam} from '../types/searchParam.type';
import { Ticket } from '../interfaces/Ticket.interface';

export default class DatabaseHandler {

    static async getTicketsFromDb(searchQuery: searchParam, params:string[]) {
        if (!searchQuery) {
            return tickets;
          }
        
          const filteredTickets = tickets.filter((ticket) =>
            params.some((param) =>
              String(ticket[param as keyof Ticket]).toLowerCase().includes(searchQuery.toLowerCase())
            )
          );
          return filteredTickets;
    }

    static async getFilteredTicketsFromDb(from: searchParam, to:searchParam) {

        let filteredTickets = tickets;

        if (from && to) {
            const fromTime = Number(from);
            const toTime = Number(to);
        
            filteredTickets = filteredTickets.filter(
              (ticket) =>
                ticket.creationTime >= fromTime && ticket.creationTime <= toTime
            );
          } else if (from) {
            const fromTime = Number(from);
        
            filteredTickets = filteredTickets.filter(
              (ticket) => ticket.creationTime >= fromTime
            );
          } else if (to) {
            const toTime = Number(to);
        
            filteredTickets = filteredTickets.filter(
              (ticket) => ticket.creationTime <= toTime
            );
          }
        console.log('Filtered tickets length: ',filteredTickets.length);
        return filteredTickets;
    }
}