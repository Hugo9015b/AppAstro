import { View, StyleSheet, Dimensions } from "react-native";
import { ImageSource } from "expo-image"
import ImageViewer from "@/components/ImageViewer";
import ButtonViewer from "@/components/ButtonViewer";
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { showMessage } from "react-native-flash-message";

const BackgroundImage: ImageSource = require('@/assets/images/title-background.jpg')
const Logo: ImageSource = require('@/assets/images/title_text.png')

export default function Index() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <ImageViewer imgSource={BackgroundImage} style={styles.imageBackground} />
            <ImageViewer imgSource={Logo} style={styles.logo} imageMode="contain" />
            <View style={styles.buttonContainer}>
                <ButtonViewer label="Play" theme="primary" onPress={() => router.navigate("/menu")} />
                <ButtonViewer label="Explore" theme="primary" onPress={() => router.navigate("/explore")} />
                <ButtonViewer label="Log In" theme="secondary" onPress={() => router.navigate("/login")} />
            </View>
            <View style={styles.detailsContainer}>
                <ButtonViewer label="Info" theme="circle" circleIcon="information-circle" onPress={() => router.navigate("/utils/info")} />
                <ButtonViewer label="Progress" theme="circle" circleIcon="trophy" onPress={() => router.navigate("/utils/progress")} />
                <ButtonViewer label="Settings" theme="circle" circleIcon="settings" onPress={() => router.navigate("/utils/settings")} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: Colors.dark.darkBlue,
    },
    buttonContainer: {
        flex: 0.4,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    detailsContainer: {
        flex: 0.3,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "80%",
    },
    imageBackground: {
        borderRadius: 0,
        position: "absolute",
        width: "100%",
        height: "100%",
        opacity: 0.7,
    },
    logo: {
        flex: 0.3,
        justifyContent: "center",
        alignItems: "center",
        width: "80%",
        borderRadius: 0,
    }
});
