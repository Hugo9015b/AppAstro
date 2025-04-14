import { View, Text, StyleSheet, Modal, ActivityIndicator } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { ImageSource } from "expo-image"
import ImageViewer from "@/components/ImageViewer";
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';
import ButtonViewer from "@/components/ButtonViewer";
import { useQuizData } from "@/hooks/useQuizData";

const BackgroundImage: ImageSource = require('@/assets/images/title-background.jpg')

export default function EasyConstellationsScreen() {
    const { min = "1", max = "1" } = useLocalSearchParams();
    const minLevel = Number(min);
    const maxLevel = Number(max);
    const router = useRouter();

    const { data: quizData, loading } = useQuizData();

    const maxQuestions = maxLevel - minLevel + 1;
    const [questionIndex, setQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [quizFinished, setQuizFinished] = useState(false);

    if (loading) {
        return <ActivityIndicator style={{ flex: 1 }} size={80} />;
    }

    const slice = quizData.slice(minLevel - 1, minLevel - 1 + maxQuestions);
    const currentQuestion = slice[questionIndex % slice.length];

    const handleAnswer = (option: string) => {
        setSelectedOption(option);
        setTimeout(() => {
            if (option === currentQuestion.correct) {
                if (questionIndex + 1 >= maxQuestions) return setQuizFinished(true);
                setQuestionIndex(question => question + 1);
            }
            setSelectedOption(null);
        }, 1000);
    };

    return (
        <View style={styles.container}>
            <ImageViewer imgSource={BackgroundImage} style={styles.imageBackground} />
            <View style={styles.infoContainer}>
                <Text style={styles.titleText}>Easy Constellations</Text>
                <Text style={styles.titleTextBoxes}>From {minLevel} up to {maxLevel} constellations</Text>
                <View style={styles.quizContainer}>
                    <ImageViewer
                        imgSource={currentQuestion.image as ImageSource}
                        style={styles.quizImage}
                        imageMode="cover"
                    />
                    <View style={styles.buttonsContainer}>
                        {currentQuestion.options.map((option) => (
                            <ButtonViewer
                                key={option}
                                label={option}
                                theme="primary"
                                onPress={() => handleAnswer(option)}
                                style={{
                                    backgroundColor: selectedOption
                                        ? option === currentQuestion.correct
                                            ? "green"
                                            : option === selectedOption
                                                ? "red"
                                                : Colors.dark.lightYellowRGBA_low_opacity
                                        : Colors.dark.lightYellowRGBA_low_opacity,
                                }}
                            />
                        ))}
                    </View>
                </View>
                <View style={styles.homeContainer}>
                    <ButtonViewer label="Home" theme="circle" circleIcon="home-sharp" onPress={() => router.navigate("/")} />
                </View>
            </View>
            <Modal
                visible={quizFinished}
                transparent
                animationType="slide"
                onRequestClose={() => setQuizFinished(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Quiz Finished</Text>
                        <Text style={styles.modalMessage}>You have completed {maxQuestions} questions!</Text>
                        <ButtonViewer
                            label="Restart"
                            theme="primary"
                            onPress={() => {
                                setQuizFinished(false);
                                setQuestionIndex(0);
                                setSelectedOption(null);
                            }}
                        />
                        <ButtonViewer
                            label="Go to Menu"
                            theme="primary"
                            onPress={() => {
                                setQuizFinished(false);
                                router.push('/constellations/menuConstellations');
                            }}
                        />
                    </View>
                </View>
            </Modal>
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
    infoContainer: {
        flex: 0.9,
        width: "100%",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    imageBackground: {
        borderRadius: 0,
        position: "absolute",
        width: "100%",
        height: "100%",
        opacity: 0.7,
    },
    titleText: {
        flex: 0.1,
        width: "70%",
        borderRadius: 8,
        fontSize: 24,
        fontWeight: "bold",
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: Colors.dark.lightYellow,
        color: Colors.dark.darkBlue,
        marginBottom: "4%",
    },
    titleTextBoxes: {
        flex: 0.1,
        width: "60%",
        borderRadius: 8,
        fontSize: 20,
        fontWeight: "bold",
        textAlign: 'center',
        textAlignVertical: 'center',
        color: Colors.dark.darkBlue,
        backgroundColor: Colors.dark.lightYellow,
        marginBottom: "4%",
    },
    quizContainer: {
        flex: 0.6,
        width: "80%",
        alignItems: "center",
        justifyContent: "center",
    },
    quizImage: {
        flex: 0.5,
        width: "100%",
        borderRadius: 10,
        borderColor: Colors.dark.lightYellow,
        borderWidth: 4,
    },
    buttonsContainer: {
        flex: 0.5,
        width: "100%",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    buttonColor: {
        color: Colors.dark.lightYellow
    },
    homeContainer: {
        flex: 0.1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "90%",
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContent: {
        flex: 0.4,
        width: "80%",
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 10,
        alignItems: "center",
    },
    modalTitle: {
        flex: 0.2,
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    modalMessage: {
        flex: 0.3,
        fontSize: 18,
        marginBottom: 20,
    },
});
