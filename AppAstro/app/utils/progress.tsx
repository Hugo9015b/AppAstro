import { View, StyleSheet, ScrollView, Text } from "react-native";
import { ImageSource } from "expo-image"
import ImageViewer from "@/components/ImageViewer";
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';
import Button from "@/components/Button";
import * as Progress from 'react-native-progress';
import CustomProgressBar from "@/components/CustomProgressBar";

const BackgroundImage: ImageSource = require('@/assets/images/title-background.jpg')
const progress = 0.5

export default function progressScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ImageViewer imgSource={BackgroundImage} style={styles.imageBackground} />
      <View style={styles.infoContainer}>
        <Text style={styles.titleText}>Progress</Text>
        <ScrollView style={styles.infoTextContainer} contentContainerStyle={styles.infoTextContent}>
          <CustomProgressBar label={"Constelaciones"} progress={progress}/>
          <CustomProgressBar label={"Estrellas"} progress={0.1}/>
          <CustomProgressBar label={"Nebulosas"} progress={0}/>
          <CustomProgressBar label={"Galaxias"} progress={0}/>
        </ScrollView>
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
    backgroundColor: Colors.dark.lightYellowRGBA,
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
