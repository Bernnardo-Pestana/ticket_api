
import { IsDate, IsNumber, IsString } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Station } from '../../station/entities/station.entity';

@Entity()
export class Ticket {
    @PrimaryGeneratedColumn()
        id: number;
    
    @IsString()
    @Column()
        price: number;

    @IsDate()
    @Column({ type: 'datetime' })
    data: Date | String;
    
    @ManyToOne(() => Station, (station) => station.id)
    origem: Station

    @ManyToOne(() => Station, (station) => station.id)
    destino: Station
}