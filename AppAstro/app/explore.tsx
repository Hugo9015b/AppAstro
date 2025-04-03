import { View, StyleSheet, Dimensions } from "react-native";
import { ImageSource } from "expo-image"
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";
import { useRouter } from 'expo-router';

const BackgroundImage: ImageSource = require('@/assets/images/title-background.jpg')
const Logo: ImageSource = require('@/assets/images/title_text.png')

export default function ExploreScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <ImageViewer imgSource={BackgroundImage} style={styles.imageBackground}/>
            <ImageViewer imgSource={Logo} style={styles.logo} imageMode="contain"/>
            <View style={styles.buttonContainer}>
                <Button label="Explore the App" theme="primary" onPress={() => router.navigate("/(tabs)/quizzes")} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#27445D",
    },
    buttonContainer: {
        flex: 0.6,
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
        borderColor: "green",
        borderWidth: 2
    },
    imageBackground: {
        borderRadius: 0,
        position: "absolute",
        width: "100%",
        height: "100%",
        opacity: 0.7,
    },
    logo: {
        flex: 0.4,
        justifyContent: "center",
        alignItems: "center",
        width: "80%",
        borderRadius: 0,
        borderColor: "green",
        borderWidth: 2
    }
});
