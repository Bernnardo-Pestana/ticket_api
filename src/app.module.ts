import { TicketModule } from './tickets/ticket.module';
import { StationModule } from './station/station.module';
import { Module } from '@nestjs/common';
import connectionOptions from './ormconfig';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    TicketModule,
    StationModule,
    TypeOrmModule.forRoot(connectionOptions as TypeOrmModuleOptions),
    ConfigModule.forRoot({ isGlobal: true }),
  ],

})
export class AppModule { }
