import { TicketService } from './ticket.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TicketController } from './ticket.controller';
import { Ticket } from './entities/ticket.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Ticket]),
    ],
    controllers: [TicketController],
    providers: [
        TicketService,
    ],
    exports: [TicketService]
})
export class TicketModule { }
