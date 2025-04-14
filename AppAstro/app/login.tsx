import { View, StyleSheet, KeyboardAvoidingView, ActivityIndicator } from "react-native";
import { ImageSource } from "expo-image"
import ImageViewer from "@/components/ImageViewer";
import ButtonViewer from "@/components/ButtonViewer";
import { useRouter } from 'expo-router';
import { useState } from "react";
import LabeledInput from '@/components/LabeledInput';
import { Colors } from '@/constants/Colors';
import { FirebaseError } from 'firebase/app'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase';

const BackgroundImage: ImageSource = require('@/assets/images/title-background.jpg')

export default function LoginScreen() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const signIn = async () => {
        setLoading(true);
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert("Login success")
            router.back();
        } catch (e: any) {
            const err = e as FirebaseError;
            console.log("Sign In failed: " + err.message)
        } finally {
            setLoading(false);
        }
    }

    return (
        <View style={styles.container}>
            <ImageViewer imgSource={BackgroundImage} style={styles.imageBackground} />
            <KeyboardAvoidingView style={styles.loginContainer} behavior="padding">
                <View style={styles.inputContainer}>
                    <LabeledInput
                        label="Email"
                        theme="primary"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />

                    <LabeledInput
                        label="Password"
                        theme="primary"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                </View>
                {loading ? (
                    <ActivityIndicator size={80} style={{ margin: 28 }} />
                ) : (
                    <View style={styles.buttonContainer}>
                        <ButtonViewer label="Log In" theme="primary" onPress={signIn} />
                        <View style={styles.secondarybuttonContainer}>
                            <ButtonViewer label="Sign Up" theme="secondary" onPress={() => router.navigate("/account/signUp")} />
                            <ButtonViewer label="Forgot Password?" theme="secondary" onPress={() => router.navigate("/account/forgotPassword")} />
                        </View>
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
        flex: 0.3,
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
