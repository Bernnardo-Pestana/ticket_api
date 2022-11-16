import { Module } from '@nestjs/common';
import connectionOptions from './ormconfig';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    TypeOrmModule.forRoot(connectionOptions as TypeOrmModuleOptions),
    ConfigModule.forRoot({ isGlobal: true }),
  ],

})
export class AppModule {}
