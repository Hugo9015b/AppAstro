import { View, StyleSheet, Dimensions } from "react-native";
import { ImageSource } from "expo-image"
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";
import { useRouter } from 'expo-router';

const BackgroundImage: ImageSource = require('@/assets/images/title-background.jpg')
const Logo: ImageSource = require('@/assets/images/title_text.png')

export default function MenuScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <ImageViewer imgSource={BackgroundImage} style={styles.imageBackground} />
            <View style={styles.buttonContainer}>
                <Button label="Constelaciones" theme="primary" onPress={() => router.navigate("/constellations/menuConstellations")} />
                <Button label="Estrellas" theme="primary" onPress={() => router.navigate("/constellations/menuConstellations")} />
                <Button label="Nebulosas" theme="primary" onPress={() => router.navigate("/constellations/menuConstellations")} />
                <Button label="Galaxias" theme="primary" onPress={() => router.navigate("/constellations/menuConstellations")} />
            </View>
            <View style={styles.homeContainer}>
                <Button label="Home" theme="circle" circleIcon="home-sharp" onPress={() => router.navigate("/")} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#27445D",
    },
    buttonContainer: {
        flex: 0.6,
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
    },
    imageBackground: {
        borderRadius: 0,
        position: "absolute",
        width: "100%",
        height: "100%",
        opacity: 0.7,
    },
    homeContainer: {
        flex: 0.2,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "90%",
    },
});
