import { StationService } from './station.service';
import { Module } from '@nestjs/common';
import { StationController } from './station.controller';
import { Station } from './entities/station.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forFeature([Station]),
    ],
    controllers: [StationController],
    providers: [
        StationService,
    ],
    exports: [StationService]
    
})
export class StationModule { }
