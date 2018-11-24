import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecvController } from './contollers/PostController';

@Module({
  imports: [],
  controllers: [AppController, RecvController],
  providers: [AppService],
})
export class AppModule {}
