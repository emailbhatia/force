// Native fetch is available in Node 22

const API_URL = 'http://localhost:3000';
const username = 'admin';
const password = 'password';

async function testLogin() {
    console.log('Testing Login...');
    try {
        const response = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Login Successful. Token received:', data.access_token ? 'Yes' : 'No');
            if (data.access_token) return data.access_token;
        } else {
            console.error('Login Failed:', response.status, response.statusText);
        }
    } catch (e) {
        console.error('Login Error:', e.message);
    }
    return null;
}

async function testProfile(token) {
    console.log('Testing Profile Fetch...');
    try {
        const response = await fetch(`${API_URL}/auth/profile`, {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` }
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Profile Fetched:', data.username === username ? 'Match' : 'Mismatch');
        } else {
            console.error('Profile Fetch Failed:', response.status);
        }
    } catch (e) {
        console.error('Profile Error:', e.message);
    }
}

(async () => {
    const token = await testLogin();
    if (token) {
        await testProfile(token);
    }
})();
