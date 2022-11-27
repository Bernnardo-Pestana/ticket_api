

import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';
import { Ticket } from './entities/ticket.entity';


export class TicketService {

    constructor(
        @InjectRepository(Ticket)
        private ticketRepository: Repository<Ticket>,
    ) {}

    async create(body:any){
        delete body.origem
        delete body.destino
        try {
        const response = await this.ticketRepository.save(body)

        return response
        } catch (error) {
            console.log(error)
        }
    }

    async getDestino(id){
        

        const datePlusOne = new Date();



        let newFinalDateString = datePlusOne.toJSON().split("T");

        const vetor = [];
        const dateSelected = new Date(newFinalDateString[0]); 
        
        dateSelected.setDate(dateSelected.getDate() - 4);

        try {

            for(let i = 0; i < 5; i++){

            if(i != 0)
            {
            dateSelected.setDate(dateSelected.getDate() + 1); 
            }           
            
            const newFinalDate = dateSelected.toJSON().split("T");

            const worked_date = newFinalDate[0]

        const dateSelectex = worked_date

       
       
            const response = await this.ticketRepository.createQueryBuilder("tickets")
            .select("COUNT(tickets.id) as Quantidade")
            .where({
                destino:{
                 id:id
                },
                data: dateSelectex
             })
            .getRawOne(); 

            const aux = {
                dia : dateSelectex,
                qtd : response.Quantidade == null ? 0 : parseInt(response.Quantidade)
            }
            vetor.push(aux);
           
        }

        } catch (error) {
            console.log(error)
        }


        return vetor
    }

    async getOrigem(id){
        const datePlusOne = new Date();



        let newFinalDateString = datePlusOne.toJSON().split("T");

        const vetor = [];
        const dateSelected = new Date(newFinalDateString[0]); 
        
        dateSelected.setDate(dateSelected.getDate() - 4);

        try {

            for(let i = 0; i < 5; i++){

            if(i != 0)
            {
            dateSelected.setDate(dateSelected.getDate() + 1); 
            }           
            
            const newFinalDate = dateSelected.toJSON().split("T");

            const worked_date = newFinalDate[0]

        const dateSelectex = worked_date

       
       
            const response = await this.ticketRepository.createQueryBuilder("tickets")
            .select("COUNT(tickets.id) as Quantidade")
            .where({
                origem:{
                 id:id
                },
                data: dateSelectex
             })
            .getRawOne(); 

            const aux = {
                dia : dateSelectex,
                qtd : response.Quantidade == null ? 0 : parseInt(response.Quantidade)
            }
            vetor.push(aux);
           
        }

        } catch (error) {
            console.log(error)
        }


        return vetor
    }

    async getAll(){

        try {
            const response = await this.ticketRepository.find()

            return response
        } catch (error) {
            console.log(error)
        }

    }
 }
