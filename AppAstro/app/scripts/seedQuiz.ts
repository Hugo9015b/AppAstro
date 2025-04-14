import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
} from "firebase/firestore";
import bundledQuizData from "../../data/quizData";
import { firebaseConfig } from "../../firebaseConfig";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function seed() {
  const collectionFire = collection(db, "quiz");
  for (let i = 0; i < bundledQuizData.length; i++) {
    const item = bundledQuizData[i];
    // Firestore can’t store require(...) directly,
    // so you’ll need to store image paths or URLs instead.
    const { image, ...rest } = item;
    await setDoc(doc(collectionFire, `question${i+1}`), rest);
    console.log(`Seeded question ${i + 1}`);
  }
  console.log("Done seeding quiz collection!");
}

seed().catch(console.error);
