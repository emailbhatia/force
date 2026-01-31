export declare class CallMetricsService {
    getMetrics(): {
        callsWaiting: number;
        activeCalls: number;
        averageHandleTime: number;
        serviceLevel: number;
        timestamp: string;
    };
}
