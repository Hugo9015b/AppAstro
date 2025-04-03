import { View, StyleSheet, Text } from "react-native";
import { ImageSource } from "expo-image"
import ImageViewer from "@/components/ImageViewer";
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';
import Button from "@/components/Button";
import RangeSlider from "@/components/RangeSlider";
import { useState } from "react";

const BackgroundImage: ImageSource = require('@/assets/images/title-background.jpg')

export default function MenuConstellationsScreen() {
  const router = useRouter();
  const [selectedLevel, setSelectedLevel] = useState(1);

  return (
    <View style={styles.container}>
      <ImageViewer imgSource={BackgroundImage} style={styles.imageBackground} />
      <View style={styles.infoContainer}>
        <Text style={styles.titleText}>Constellations</Text>
        <View style={styles.levelsContainer}>
          <Text style={styles.titleTextBoxes}>Niveles</Text>
          <RangeSlider label="Levels" min={1} max={88} onValueChange={setSelectedLevel} />
        </View>
        <View style={styles.modesContainer}>
          <Text style={styles.titleTextBoxes}>Modo</Text>
          <Button
            label="Easy"
            theme="primary"
            onPress={() => router.push(`/constellations/easyConstellations?level=${selectedLevel}`)}
          />
          <Button
            label="Hard"
            theme="primary"
            onPress={() => router.push(`/constellations/hardConstellations?level=${selectedLevel}`)}
          />
        </View>
        <View style={styles.homeContainer}>
          <Button label="Home" theme="circle" circleIcon="home-sharp" onPress={() => router.navigate("/")} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#27445D",
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
    backgroundColor: Colors.dark.lightYellowRGBA,
    color: Colors.dark.darkBlue,
    padding: "2%",
  },
  levelsContainer: {
    flex: 0.4,
    width: "80%",
    marginVertical: "4%",
    backgroundColor: Colors.dark.lightYellowRGBA,
    borderRadius: 8,
    padding: "4%",
    alignItems: 'center',
    justifyContent: "space-evenly",
  },
  modesContainer: {
    flex: 0.4,
    width: "80%",
    backgroundColor: Colors.dark.lightYellowRGBA,
    borderRadius: 8,
    padding: "4%",
    alignItems: 'center',
    justifyContent: "space-evenly",
  },
  titleTextBoxes: {
    width: "80%",
    borderRadius: 8,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'center',
    textAlignVertical: 'center',
    color: Colors.dark.darkBlue,
  },
  homeContainer: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
  },
});
