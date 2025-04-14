import { View, StyleSheet, Text } from "react-native";
import { ImageSource } from "expo-image"
import ImageViewer from "@/components/ImageViewer";
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';
import ButtonViewer from "@/components/ButtonViewer";
import { useState } from "react";
import LevelRangeSlider from "@/components/LevelRangeSlider";

const BackgroundImage: ImageSource = require('@/assets/images/title-background.jpg')

export default function MenuConstellationsScreen() {
  const router = useRouter();
  const [[minLevel, maxLevel], setLevels] = useState<[number, number]>([1, 88]);

  return (
    <View style={styles.container}>
      <ImageViewer imgSource={BackgroundImage} style={styles.imageBackground} />
      <View style={styles.infoContainer}>
        <Text style={styles.titleText}>Constellations</Text>
        <View style={styles.levelsContainer}>
          <Text style={styles.titleTextBoxes}>Levels</Text>
          <LevelRangeSlider
            label="Levels"
            min={1}
            max={88}
            values={[minLevel, maxLevel]}
            onValuesChange={setLevels}
          />
        </View>
        <View style={styles.modesContainer}>
          <Text style={styles.titleTextBoxes}>Mode</Text>
          <ButtonViewer
            label="Easy"
            theme="primary"
            onPress={() =>
              router.push(`/constellations/easyConstellations?min=${minLevel}&max=${maxLevel}`
              )}
          />
          <ButtonViewer
            label="Hard"
            theme="primary"
            onPress={() =>
              router.push(`/constellations/hardConstellations?min=${minLevel}&max=${maxLevel}`
              )}
          />
        </View>
        <View style={styles.homeContainer}>
          <ButtonViewer label="Home" theme="circle" circleIcon="home-sharp" onPress={() => router.navigate("/")} />
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
    backgroundColor: Colors.dark.lightYellowRGBA_low_opacity,
    color: Colors.dark.darkBlue,
    padding: "2%",
  },
  levelsContainer: {
    flex: 0.4,
    width: "80%",
    marginVertical: "4%",
    backgroundColor: Colors.dark.lightYellowRGBA_low_opacity,
    borderRadius: 8,
    padding: "4%",
    alignItems: 'center',
    justifyContent: "space-evenly",
  },
  modesContainer: {
    flex: 0.4,
    width: "80%",
    backgroundColor: Colors.dark.lightYellowRGBA_low_opacity,
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
