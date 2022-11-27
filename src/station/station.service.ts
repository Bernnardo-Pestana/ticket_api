/*
https://docs.nestjs.com/providers#services
*/

import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';
import { Station } from './entities/station.entity';


export class StationService { 
    
    constructor(
        @InjectRepository(Station)
        private stationRepository: Repository<Station>,
    ) {}


    async create(body:any){
        try {
            const response = await this.stationRepository.save(body)

            return response
        } catch (error) {
            console.log(error)
        }
    }

    async getAll(){
        try {
            const response  = await this.stationRepository.find()

            return response;
        } catch (error) {
            console.log(error)
        }
    }
    async update(id:number,body:any){
        try {
            const response = await this.stationRepository.update(id,body)
            return response
        } catch (error) {
            console.log(error)
        }
    }

    async getById(id:number){

        try {
            const response = await this.stationRepository.findOneBy({id:id})

            return response
        } catch (error) {
            console.log(error)
        }
    }

}
