"use client";

import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

interface Metrics {
    callsWaiting: number;
    activeCalls: number;
    averageHandleTime: number;
    timestamp?: string;
}

export default function Dashboard() {
    const [metrics, setMetrics] = useState<Metrics | null>(null);
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        const socket: Socket = io('http://localhost:3000');

        socket.on('connect', () => {
            console.log('Connected to WebSocket server');
            setIsConnected(true);
        });

        socket.on('disconnect', () => {
            console.log('Disconnected from WebSocket server');
            setIsConnected(false);
        });

        socket.on('metrics', (data: Metrics) => {
            console.log('Received metrics:', data);
            setMetrics(data);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    return (
        <div className="dashboard-container">
            <h2>Real-Time Dashboard</h2>
            <div className="status-indicator">
                Status: <span style={{ color: isConnected ? 'green' : 'red' }}>
                    {isConnected ? 'Connected' : 'Disconnected'}
                </span>
            </div>

            {metrics ? (
                <div className="metrics-grid">
                    <div className="metric-card">
                        <h3>Calls Waiting</h3>
                        <p className="metric-value">{metrics.callsWaiting}</p>
                    </div>
                    <div className="metric-card">
                        <h3>Active Calls</h3>
                        <p className="metric-value">{metrics.activeCalls}</p>
                    </div>
                    <div className="metric-card">
                        <h3>Avg Handle Time</h3>
                        <p className="metric-value">{metrics.averageHandleTime}s</p>
                    </div>
                </div>
            ) : (
                <p>Waiting for data...</p>
            )}

            <style jsx>{`
        .dashboard-container {
          padding: 20px;
          background: #f5f5f5;
          border-radius: 8px;
          margin: 20px 0;
          color: #333;
        }
        .status-indicator {
          margin-bottom: 15px;
          font-weight: bold;
        }
        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
        }
        .metric-card {
          background: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          text-align: center;
        }
        .metric-value {
          font-size: 2rem;
          font-weight: bold;
          margin: 10px 0 0;
          color: #0070f3;
        }
      `}</style>
        </div>
    );
}
