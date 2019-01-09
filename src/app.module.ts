import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConnectURLClass, RecvController } from './contollers/PostController';

@Module({
  imports: [],
  controllers: [AppController, RecvController, ConnectURLClass],
  providers: [AppService],
})
export class AppModule {}
