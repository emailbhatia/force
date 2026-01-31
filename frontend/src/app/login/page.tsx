"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import api from '@/utils/api';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await api.post('/auth/login', { username, password });
            localStorage.setItem('token', response.data.access_token);
            router.push('/dashboard');
        } catch (err) {
            setError('Invalid credentials');
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
            <h1>Workforce Management Login</h1>
            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    style={{ padding: '0.5rem' }}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{ padding: '0.5rem' }}
                />
                <button type="submit" style={{ padding: '0.5rem', cursor: 'pointer' }}>Login</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
            <div style={{ marginTop: '1rem', fontSize: '0.8rem' }}>
                <p>Default logins:</p>
                <p>admin / password</p>
                <p>agent / password</p>
            </div>
        </div>
    );
}
