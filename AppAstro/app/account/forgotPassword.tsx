import { View, StyleSheet, KeyboardAvoidingView, ActivityIndicator } from "react-native";
import { ImageSource } from "expo-image"
import ImageViewer from "@/components/ImageViewer";
import ButtonViewer from "@/components/ButtonViewer";
import { useRouter } from 'expo-router';
import { useState } from "react";
import LabeledInput from '@/components/LabeledInput';
import { Colors } from '@/constants/Colors';
import TextViewer from "@/components/TextViewer";

const BackgroundImage: ImageSource = require('@/assets/images/title-background.jpg')
const Logo: ImageSource = require('@/assets/images/title_text.png')

export default function ForgotPasswordScreen() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const checkEmail = async () => { }

    const sendEmail = async () => { }

    return (
        <View style={styles.container}>
            <ImageViewer imgSource={BackgroundImage} style={styles.imageBackground} />
            <KeyboardAvoidingView style={styles.loginContainer} behavior="padding">
                <View style={styles.inputContainer}>
                    <TextViewer label="Enter your email and if you're subscribed will send you a reset mail." theme="primary" />
                    <LabeledInput
                        label="Email"
                        theme="primary"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>
                {loading ? (
                    <ActivityIndicator size={"small"} style={{ margin: 28 }} />
                ) : (
                    <View style={styles.buttonContainer}>
                        <ButtonViewer label="Send Email" theme="primary" onPress={sendEmail} />
                    </View>
                )}
                <View style={styles.homeContainer}>
                    <ButtonViewer label="Home" theme="circle" circleIcon="home-sharp" onPress={() => router.navigate("/")} />
                </View>
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.dark.darkBlue,
    },
    imageBackground: {
        borderRadius: 0,
        position: "absolute",
        width: "100%",
        height: "100%",
        opacity: 0.7,
    },
    loginContainer: {
        flex: 0.8,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    inputContainer: {
        flex: 0.3,
        justifyContent: "center",
        alignItems: "center",
        width: "80%",
    },
    buttonContainer: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center",
        width: "80%",
    },
    secondarybuttonContainer: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
    },
    homeContainer: {
        flex: 0.2,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "90%",
    },
});
