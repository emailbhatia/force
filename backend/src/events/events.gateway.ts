import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class EventsGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  handleConnection(client: any) {
    console.log(`Client connected: ${client.id}`);
    this.startSimulation(client);
  }

  handleDisconnect(client: any) {
    console.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('events')
  handleEvent(@MessageBody() data: string): string {
    return data;
  }

  // Simulate real-time events
  private startSimulation(client: any) {
    // Send initial mock data
    client.emit('metrics', {
      callsWaiting: 5,
      activeCalls: 12,
      averageHandleTime: 240,
    });

    // Emulate dynamic updates every 5 seconds
    setInterval(() => {
      const metrics = {
        callsWaiting: Math.floor(Math.random() * 10),
        activeCalls: Math.floor(Math.random() * 20) + 10,
        averageHandleTime: Math.floor(Math.random() * 300) + 120,
        timestamp: new Date().toISOString(),
      };
      this.server.emit('metrics', metrics);
    }, 5000);
  }
}
