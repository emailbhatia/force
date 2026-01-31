import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MockApiModule } from './mock-api/mock-api.module';
import { EventsGateway } from './events/events.gateway';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { ScheduleModule } from './schedule/schedule.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [User, __dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    MockApiModule, UsersModule, AuthModule, ScheduleModule],
  controllers: [AppController],
  providers: [AppService, EventsGateway],
})
export class AppModule { }
