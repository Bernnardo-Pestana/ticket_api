/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TicketService } from './ticket.service';

@Controller('ticket')
export class TicketController { 

    constructor(
        private ticketService: TicketService,
    ) {}


    @Post()
    async create(@Body() body : any){
        return await this.ticketService.create(body)
    }

    @Get(':id/destino')
    async getDestino(@Param('id') id : number){
        return await this.ticketService.getDestino(id)
    }

    @Get(':id/origem')
    async getorigem(@Param('id') id : number){
        return await this.ticketService.getOrigem(id)
    }

    @Get()
    async getAll(@Param('id') id : number){
        return await this.ticketService.getAll()
    }
}
