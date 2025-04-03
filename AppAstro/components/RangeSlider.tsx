import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Slider from '@react-native-community/slider';
import { Colors } from '@/constants/Colors';


type Props = {
    label: string;
    min?: number;
    max?: number;
    onValueChange?: (value: number) => void;
};

export default function RangeSlider({ label, min = 1, max = 88, onValueChange }: Props) {
    const [value, setValue] = useState(min);

    return (
        <View style={styles.container}>
            <Text style={styles.progressText}>{label}</Text>
            <Slider
                style={styles.slider}
                minimumValue={min}
                maximumValue={max}
                minimumTrackTintColor={Colors.dark.darkBlue}
                maximumTrackTintColor={Colors.dark.darkBlue}
                thumbTintColor={Colors.dark.darkBlue}
                value={value}
                onValueChange={(newValue) => {
                    setValue(newValue);
                    if (onValueChange) {
                        onValueChange(Math.round(newValue));
                    }
                }}
            />
            <View style={styles.valuesContainer}>
                <Text style={styles.valueLabel}>{min}</Text>
                <Text style={styles.valueLabel}>Current: {Math.round(value)}</Text>
                <Text style={styles.valueLabel}>{max}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0.8,
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        borderRadius: 10,
        backgroundColor: Colors.dark.lightYellow,
        padding: "4%",
        marginVertical: "4%",
    },
    progressText: {
        fontSize: 20,
        color: Colors.dark.darkBlue,
        fontWeight: 'bold',
        marginBottom: "8%",
    },
    slider: {
        width: "100%",
    },
    valuesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "100%",
        marginTop: 10,
    },
    valueLabel: {
        fontSize: 16,
        color: Colors.dark.darkBlue,
    },
});
