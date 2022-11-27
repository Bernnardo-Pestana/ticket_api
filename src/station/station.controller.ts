import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { StationService } from './station.service';

@Controller('station')
export class StationController {

    constructor(
        private stationService: StationService,
    ) {}

    @Get()
    async getall(){
        return await this.stationService.getAll();
    }

    @Get(':id')
    async getbyId(@Param('id') id : number){
        return await this.stationService.getById(id)
    }

    @Put(':id')
    async update(@Param('id') id : number,@Body() body : any){
        return await this.stationService.update(id,body)
    }

    @Post()
    async create(@Body() body : any){
        return await this.stationService.create(body)
    }


}
