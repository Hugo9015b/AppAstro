import { useEffect } from 'react';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/firebase';
import { useAuth } from '@/hooks/authContext';

export function useInitializeUserProgress() {
  const user = useAuth();
  useEffect(() => {
    if (!user) return;
    (async () => {
      const ref = doc(db, "progress", user.uid);
      const snap = await getDoc(ref);
      if (!snap.exists()) {
        await setDoc(ref, {
          constellations: 0,
          stars: 0,
          nebulas: 0,
          galaxies: 0,
          createdAt: serverTimestamp(),
        });
      }
    })();
  }, [user]);
}
