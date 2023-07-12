import express from 'express';
import {json,urlencoded} from "body-parser";
import ticketsRoutes from './routes/tickets.route';

const app = express();
app.use(json())
app.use(urlencoded({extended: true}))

app.use('/tickets',ticketsRoutes);

export default app;
