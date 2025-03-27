import { Text, View, StyleSheet } from "react-native";
import { Image, ImageSource } from "expo-image"
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";

const PlaceholderImage: ImageSource = require('@/assets/images/background-image.png')

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome</Text>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button label="Choose a photo" theme="primary"/>
        <Button label="Use this photo" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  text: {
    color: "#fff"
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff"
  },
  imageContainer: {
    flex: 1,
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: '100%',
    height: '100%',
    maxWidth: 600,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
