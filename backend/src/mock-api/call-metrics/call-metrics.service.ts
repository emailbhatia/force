import { Injectable } from '@nestjs/common';

@Injectable()
export class CallMetricsService {
    getMetrics() {
        return {
            callsWaiting: Math.floor(Math.random() * 10),
            activeCalls: Math.floor(Math.random() * 20) + 10,
            averageHandleTime: Math.floor(Math.random() * 300) + 120, // seconds
            serviceLevel: Math.floor(Math.random() * 20) + 80, // percentage
            timestamp: new Date().toISOString(),
        };
    }
}
