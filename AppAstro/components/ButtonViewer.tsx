import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
  Dimensions,
} from 'react-native';
import { Colors } from '@/constants/Colors';
import Ionicons from "@expo/vector-icons/Ionicons";

type Props = {
  label: string;
  theme: 'primary' | 'secondary' | 'circle';
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  circleIcon?: React.ComponentProps<typeof Ionicons>['name'];
};

const { width } = Dimensions.get('screen');
const circleSize = width * 0.2;
const iconSize = width * 0.1

export default function ButtonViewer({
  label,
  theme,
  onPress,
  style,
  textStyle,
  circleIcon,
}: Props) {
  const [pressed, setPressed] = useState(false);

  if (theme === 'primary') {
    return (
      <View style={styles.buttonContainer}>
        <Pressable
          onPress={onPress}
          onPressIn={() => setPressed(true)}
          onPressOut={() => setPressed(false)}
          style={[
            styles.button,
            pressed
              ? styles.primaryButtonPressed
              : styles.primaryButton,
            style
          ]}
        >
          <Text style={[styles.buttonLabel, styles.primaryButtonLabel, textStyle]}>
            {label}
          </Text>
        </Pressable>
      </View>
    );
  } else if (theme === 'secondary') {
    return (
      <View style={styles.buttonContainer}>
        <Pressable
          onPress={onPress}
          onPressIn={() => setPressed(true)}
          onPressOut={() => setPressed(false)}
          style={[styles.button, style]}
        >
          <Text style={[
            styles.buttonLabel,
            pressed
            ? styles.secondaryButtonLabelPressed
            : styles.secondaryButtonLabel,
            textStyle
          ]}>
            {label}
          </Text>
        </Pressable>
      </View>
    );
  } else if (theme === 'circle') {
    return (
      <View style={styles.buttonContainer}>
        <Pressable
          onPress={onPress}
          onPressIn={() => setPressed(true)}
          onPressOut={() => setPressed(false)}
          aria-label={label}
          style={[
            styles.button,
            styles.circleButton,
            { borderColor: Colors.dark.lightYellowRGBA_low_opacity },
            pressed && { backgroundColor: Colors.dark.lightYellow, borderColor: Colors.dark.darkBlue },
            style
          ]}
        >
          <Ionicons
            name={circleIcon ?? 'information-circle'}
            color={pressed ? Colors.dark.darkBlue : Colors.dark.lightYellowRGBA_low_opacity}
            size={iconSize}
          />
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: "70%",
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  primaryButton: {
    width: "100%",
    height: "60%",
    backgroundColor: Colors.dark.lightYellowRGBA_low_opacity,
  },
  primaryButtonPressed: {
    width: '100%',
    height: '60%',
    backgroundColor: Colors.dark.lightYellow,
  },
  primaryButtonLabel: {
    color: Colors.dark.darkBlue,
  },
  secondaryButtonLabel: {
    color: Colors.dark.lightYellow,
    textDecorationLine: "underline",
  },
  secondaryButtonLabelPressed: {
    color: Colors.dark.darkBlue,
    textDecorationLine: "underline",
  },
  circleButton: {
    width: circleSize,
    height: circleSize,
    borderRadius: circleSize / 2,
    borderWidth: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});