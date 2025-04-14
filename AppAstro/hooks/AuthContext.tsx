// Wrap this module in the Rootlayout for passing user info to the app and show progress

import React,
{
    createContext,
    useContext,
    useState,
    useEffect
} from 'react';
import {
    auth,
    onAuthStateChanged,
    type User,
} from '@/firebase';

const AuthContext = createContext<User | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Subscribe to auth state changes
        const unsubscribe = onAuthStateChanged(auth, (u) => {
            setUser(u);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    // While loading, you could return a splash screen or null
    if (loading) return null;

    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    );
}

// Hook to consume the context
export function useAuth() {
    return useContext(AuthContext);
}
