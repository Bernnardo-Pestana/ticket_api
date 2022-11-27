
import { IsDate, IsNumber, IsString } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';


export enum Linha {
    V = "V",
    A = "A",
    I = "I"
}


@Entity()
export class Station {
    @PrimaryGeneratedColumn()
        id: number;
    
    @IsString()
    @Column({ type: "varchar", length: 100 })
        nome: string;

    @IsString()
    @Column({ type: "varchar", length: 100 })
        linha: Linha;
}