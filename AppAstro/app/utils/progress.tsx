import { View, StyleSheet, ScrollView, Text } from "react-native";
import { ImageSource } from "expo-image"
import ImageViewer from "@/components/ImageViewer";
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';
import ButtonViewer from "@/components/ButtonViewer";
import CustomProgressBar from "@/components/CustomProgressBar";
//import CustomProgressBarV2 from "@/components/CustomProgressBarV2";
import { useAuth } from '@/hooks/authContext';
import { db } from '@/firebase';
import { doc, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';

const BackgroundImage: ImageSource = require('@/assets/images/title-background.jpg')
const progress = 0.4

export default function progressScreen() {
  const router = useRouter();
  const user = useAuth();

  const [progressData, setProgressData] = useState<{
    constellations: number;
    stars: number;
    nebulas: number;
    galaxies: number;
  } | null>(null);

  useEffect(() => {
    if (!user) return;

    const unsub = onSnapshot(
      doc(db, 'progress', user.uid),
      (snap) => {
        if (snap.exists()) {
          setProgressData(snap.data() as any);
        } else {
          setProgressData(null);
        }
      },
      (err) => console.error(err)
    );
    return unsub;
  }, [user]);

  if (!user) {
    return (
      <View style={styles.center}>
        <Text style={styles.message}>
          To save progress and display it please log in.
        </Text>
      </View>
    );
  }

  if (!progressData) {
    return (
      <View style={styles.center}>
        <Text style={styles.message}>No progress yet.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ImageViewer imgSource={BackgroundImage} style={styles.imageBackground} />
      <View style={styles.infoContainer}>
        <Text style={styles.titleText}>Progress</Text>
        <ScrollView style={styles.infoTextContainer} contentContainerStyle={styles.infoTextContent}>
          <CustomProgressBar label={"Constelaciones"} progress={progressData.constellations}/>
          <CustomProgressBar label={"Estrellas"} progress={progressData.stars}/>
          <CustomProgressBar label={"Nebulosas"} progress={progressData.nebulas}/>
          <CustomProgressBar label={"Galaxias"} progress={progressData.galaxies}/>
        </ScrollView>
        <View style={styles.homeContainer}>
          <ButtonViewer label="Home" theme="circle" circleIcon="home-sharp" onPress={() => router.navigate("/")} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  message: { color: '#000', fontSize: 18 },
  container: {
    flex: 1,
    backgroundColor: Colors.dark.darkBlue,
    justifyContent: "center",
    alignItems: "center",
  },
  imageBackground: {
    borderRadius: 0,
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0.7,
  },
  infoContainer: {
    flex: 0.9,
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  titleText: {
    flex: 0.1,
    width: "70%",
    borderRadius: 8,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: Colors.dark.lightYellowRGBA_low_opacity,
    color: Colors.dark.darkBlue,
    padding: "2%",
  },
  infoTextContainer: {
    flex: 0.5,
    width: "80%",
    marginVertical: "10%",
    backgroundColor: 'rgba(239, 233, 213, 0.5)',
    borderRadius: 8,
  },
  infoTextContent: {
    padding: "6%",
    alignItems: 'center',
  },
  infoText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: Colors.dark.darkBlue,
    fontSize: 20,
    width: "90%",
  },
  homeContainer: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
  },
});
