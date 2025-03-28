import { View, StyleSheet, Dimensions } from "react-native";
import { ImageSource } from "expo-image"
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";
import { Colors } from '@/constants/Colors';
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from 'expo-router';

const PlaceholderImage: ImageSource = require('@/assets/images/antlia.jpg')
const { width } = Dimensions.get("screen");

export default function Index() {
    const router = useRouter();

    return (
        <LinearGradient colors={['#000', Colors.dark.darkBlue]} style={styles.container}>
            <View style={styles.imageContainer}>
                <ImageViewer imgSource={PlaceholderImage} width={width} style={{opacity: 0.8}}/>
            </View>
            <View style={styles.buttonContainer}>
                <Button label="Explore the App" theme="primary" onPress={() => router.navigate('/(tabs)/quizzes')} />
                <Button label="Log in" />
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
});
