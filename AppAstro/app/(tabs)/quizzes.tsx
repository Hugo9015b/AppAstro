import { Text, View, StyleSheet } from "react-native";
import { Colors } from '@/constants/Colors';
import { LinearGradient } from "expo-linear-gradient";
import { BasicCarousel } from "@/components/Corousel";

export default function Index() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Colors.dark.darkGreen, Colors.dark.darkBlue]}
        style={styles.imageContainer}
        locations={[0.7, 1]}>
        <Text>
          30 to 50 constellations
        </Text>
        <BasicCarousel />
      </LinearGradient>
      <LinearGradient
        colors={[Colors.dark.darkGreen, Colors.dark.darkBlue]}
        style={styles.textContainer}
        locations={[0.7, 1]}>
        <Text style={styles.title}>
          Difficult
        </Text>
        <Text style={styles.text}>
          Here you will see the following 30 to 50 constellations.
          Real images are shown so that you can show your acquired
          skills.
        </Text>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.darkBlue,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    //borderColor: "#f50",
    //borderWidth: 2,
  },
  textContainer: {
    flex: 1 / 3,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    //borderColor: "#05f",
    //borderWidth: 2,
    backgroundColor: Colors.dark.lightGreen,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  imageContainer: {
    flex: 1,
    //borderColor: "#f5f",
    //borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: Colors.dark.lightYellow,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: "justify",
    paddingTop: '6%',
  },
  text: {
    color: Colors.dark.lightYellow,
    fontSize: 18,
    paddingTop: '6%',
    paddingHorizontal: '6%',
    fontWeight: 'bold',
    textAlign: "justify",
  },
  image: {
    width: '100%',
    height: '100%',
    maxWidth: 600,
    borderRadius: 18,
  },
});
