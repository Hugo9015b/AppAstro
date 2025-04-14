import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";
import bundledQuizData from "@/data/quizData";

export function useQuizData() {
  const [data, setData] = useState<typeof bundledQuizData>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      // try Firestore first
      try {
        const snap = await getDocs(collection(db, "quiz"));
        if (!snap.empty) {
          const remote = snap.docs.map(datum => datum.data());
          setData(remote as any);
          await AsyncStorage.setItem("quizCache", JSON.stringify(remote));
          setLoading(false);
          return;
        }
      } catch (e) {
        console.warn("Firestore quiz load failed, falling back to cache", e);
      }

      // next try AsyncStorage
      const cached = await AsyncStorage.getItem("quizCache");
      if (cached) {
        setData(JSON.parse(cached));
        setLoading(false);
        return;
      }

      // last resort: bundled
      setData(bundledQuizData);
      setLoading(false);
    })();
  }, []);

  return { data, loading };
}
