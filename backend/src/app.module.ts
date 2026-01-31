import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MockApiModule } from './mock-api/mock-api.module';
import { EventsGateway } from './events/events.gateway';

@Module({
  imports: [MockApiModule],
  controllers: [AppController],
  providers: [AppService, EventsGateway],
})
export class AppModule {}
