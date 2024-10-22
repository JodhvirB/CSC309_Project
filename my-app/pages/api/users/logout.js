/*
import { verifyToken } from 'my-app/utils/auth';

export default async function handler(req, res) {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    const decoded = verifyToken(token);

    if (!decoded) {
        return res.status(401).json({ message: 'Invalid token' });
    }

    // Here you could add logic to blacklist the token or handle session invalidation

    return res.status(200).json({ message: 'Successfully logged out' });
}*/
