import {
    View,
    StyleSheet,
    KeyboardAvoidingView,
    ActivityIndicator
} from "react-native";
import { ImageSource } from "expo-image"
import ImageViewer from "@/components/ImageViewer";
import ButtonViewer from "@/components/ButtonViewer";
import { useRouter } from 'expo-router';
import { useState } from "react";
import LabeledInput from '@/components/LabeledInput';
import { Colors } from '@/constants/Colors';
import { FirebaseError } from 'firebase/app'

// IMPORT from your firebase.ts
import {
    auth,
    createUserWithEmailAndPassword,
    updateProfile,
} from '@/firebase';

const BackgroundImage: ImageSource = require('@/assets/images/title-background.jpg')

export default function SignUpScreen() {
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const signUp = async () => {
        setLoading(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

            await updateProfile(userCredential.user, { displayName: name });

            alert('Account created! Check your email for verification.');
            router.back();
        } catch (e: any) {
            const err = e as FirebaseError;
            console.error('Sign Up failed:', err.message);
            alert(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <ImageViewer imgSource={BackgroundImage} style={styles.imageBackground} />
            <KeyboardAvoidingView style={styles.loginContainer} behavior="padding">
                <View style={styles.inputContainer}>
                    <LabeledInput
                        label="Name"
                        theme="primary"
                        value={name}
                        onChangeText={setName}
                        keyboardType="default"
                        autoCapitalize="none"
                    />
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
                    <ActivityIndicator size={"small"} style={{ margin: 28 }} />
                ) : (
                    <View style={styles.buttonContainer}>
                        <ButtonViewer label="Sign Up" theme="primary" onPress={signUp} style={styles.signUpButton} />
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
    signUpButton: {
        width: "90%",
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
