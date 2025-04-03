import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import * as Progress from 'react-native-progress';
import { Colors } from '@/constants/Colors';

const { width } = Dimensions.get("screen");
const _imageWidth = width * 0.6;
const _imageHeight = _imageWidth * 0.05;

type Props = {
    progress: number,
    label: string,
}

export default function CustomProgressBar({ progress, label }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.progressTitle}>{label}</Text>
            <Progress.Bar
                progress={progress}
                width={_imageWidth}
                height={_imageHeight}
                color={Colors.dark.darkBlue}
                unfilledColor={Colors.dark.lightYellow}
                borderColor={Colors.dark.lightYellow}
                borderRadius={10}
                borderWidth={4}
                style={styles.progressBar}
            />
            <Text style={styles.progressText}>{Math.round(progress * 100)}%</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0.3,
        alignSelf: 'center',
        alignItems: 'center',
    },
    progressBar: {
        marginVertical: 10,
    },
    progressTitle: {
        alignSelf: 'flex-start',
        fontSize: 20,
        color: Colors.dark.darkBlue,
        fontWeight: 'bold',
    },
    progressText: {
        fontSize: 20,
        color: Colors.dark.darkBlue,
        fontWeight: 'bold',
    },
});
