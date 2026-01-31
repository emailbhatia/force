"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import io from 'socket.io-client';
import api from '@/utils/api';

export default function DashboardPage() {
    const [metrics, setMetrics] = useState<any>(null);
    const [user, setUser] = useState<any>(null);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/login');
            return;
        }

        // Fetch user profile
        api.get('/auth/profile')
            .then(res => setUser(res.data))
            .catch(() => router.push('/login'));

        // Connect to WebSocket
        const socket = io('http://localhost:3000');

        socket.on('connect', () => {
            console.log('Connected to WebSocket');
        });

        socket.on('metrics', (data) => {
            console.log('Metrics received:', data);
            setMetrics(data);
        });

        return () => {
            socket.disconnect();
        };
    }, [router]);

    if (!user) return <div>Loading...</div>;

    return (
        <div style={{ padding: '2rem' }}>
            <h1>Dashboard</h1>
            <p>Welcome, {user.username} ({user.roles.join(', ')})</p>

            <div style={{ marginTop: '2rem', border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
                <h2>Live Call Center Metrics</h2>
                {metrics ? (
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
                        <div style={cardStyle}>
                            <h3>Calls Waiting</h3>
                            <p style={valStyle}>{metrics.callsWaiting}</p>
                        </div>
                        <div style={cardStyle}>
                            <h3>Active Calls</h3>
                            <p style={valStyle}>{metrics.activeCalls}</p>
                        </div>
                        <div style={cardStyle}>
                            <h3>Avg Handle Time</h3>
                            <p style={valStyle}>{metrics.averageHandleTime}s</p>
                        </div>
                    </div>
                ) : (
                    <p>Waiting for real-time data...</p>
                )}
            </div>
        </div>
    );
}

const cardStyle = {
    background: '#f5f5f5',
    padding: '1rem',
    borderRadius: '8px',
    textAlign: 'center' as const,
};

const valStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
};
