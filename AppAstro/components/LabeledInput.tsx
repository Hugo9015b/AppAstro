import React, { useState } from 'react';

import {
    View,
    TextInput,
    StyleSheet,
    StyleProp,
    TextStyle,
    ViewStyle,
    TextInputProps,
} from 'react-native';
import { Colors } from '@/constants/Colors';

type Props = TextInputProps & {
    label: string;
    theme?: 'primary' | 'secondary';
    style?: StyleProp<ViewStyle>;
    inputStyle?: StyleProp<TextStyle>;
};

export default function LabeledInput({
    label,
    theme = 'primary',
    style,
    inputStyle,
    ...textInputProps
}: Props) {
    const [focused, setFocused] = useState(false);

    const containerStyles = [
        styles.container,
        theme === 'primary'
            ? focused
                ? styles.primaryContainerFocused
                : styles.primaryContainer
            : styles.secondaryContainer,
        style,
    ];

    const textStyles = [
        styles.input,
        theme === 'primary' ? styles.primaryInput : styles.secondaryInput,
        inputStyle,
    ];

    const placeholderColor =
        theme === 'primary'
            ? Colors.dark.darkBlueRGBA_low_opacity
            : Colors.dark.lightYellowRGBA_low_opacity;

    return (
        <View style={containerStyles}>
            <View style={styles.labelWrapper}>
                <TextInput
                    style={textStyles}
                    placeholder={label}
                    placeholderTextColor={placeholderColor}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    {...textInputProps}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginVertical: 8,
    },
    primaryContainer: {
        width: "90%",
        backgroundColor: Colors.dark.lightYellowRGBA_low_opacity,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: Colors.dark.darkBlue,
    },
    primaryContainerFocused: {
        width: '90%',
        backgroundColor: Colors.dark.lightYellow,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: Colors.dark.darkBlue,
    },
    secondaryContainer: {
        borderBottomWidth: 1,
        borderColor: Colors.dark.lightYellow,
    },
    labelWrapper: {
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    input: {
        fontSize: 20,
        color: Colors.dark.darkBlue,
        opacity: 1,
    },
    primaryInput: {
        fontSize: 20,
    },
    secondaryInput: {
        fontSize: 24,
    },
});
