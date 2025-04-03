import { View, StyleSheet, ScrollView, Text } from "react-native";
import { ImageSource } from "expo-image"
import ImageViewer from "@/components/ImageViewer";
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';
import Button from "@/components/Button";

const BackgroundImage: ImageSource = require('@/assets/images/title-background.jpg')

export default function InfoScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ImageViewer imgSource={BackgroundImage} style={styles.imageBackground} />
      <View style={styles.infoContainer}>
        <Text style={styles.titleText}>Information</Text>
        <ScrollView style={styles.infoTextContainer} contentContainerStyle={styles.infoTextContent}>
          <Text style={styles.infoText}>
            OBJETIVO {`\n\n`}
            -------------- {`\n\n`}
            CONSTELACIONES {`\n\n`}
            -------------- {`\n\n`}
            ESTRELLAS {`\n\n`}
            -------------- {`\n\n`}
            NIVELES {`\n\n`}
            -------------- {`\n\n`}
            DIFICULTAD {`\n\n`}
            -------------- {`\n\n`}
            EXPLORAR {`\n\n`}
            -------------- {`\n\n`}
            AJUSTES {`\n\n`}
            -------------- {`\n\n`}
            PROGRESO {`\n\n`}
            -------------- {`\n\n`}
          </Text>
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
  infoTextContainer: {
    flex: 0.5,
    width: "80%",
    marginVertical: "10%",
    backgroundColor: Colors.dark.lightYellowRGBA,
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
