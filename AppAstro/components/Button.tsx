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

export default function Button({
  label,
  theme,
  onPress,
  style,
  textStyle,
  circleIcon,
}: Props) {
  if (theme === 'primary') {
    return (
      <View style={styles.buttonContainer}>
        <Pressable
          style={[styles.button, styles.primaryButton, style]}
          onPress={onPress}
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
          style={[styles.button, styles.secondaryButton, style]}
          onPress={onPress}
        >
          <Text style={[styles.buttonLabel, styles.secondaryButtonLabel, textStyle]}>
            {label}
          </Text>
        </Pressable>
      </View>
    );
  } else if (theme === 'circle') {
    return (
      <View style={styles.buttonContainer}>
        <Pressable
          style={[styles.button, styles.circleButton, style]}
          onPress={onPress}
          aria-label={label}
        >
          <Ionicons name={circleIcon ?? 'information-circle'} color={Colors.dark.lightYellowRGBA} size={iconSize} />
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
    backgroundColor: Colors.dark.lightYellowRGBA,
  },
  primaryButtonLabel: {
    color: Colors.dark.darkBlue,
  },
  secondaryButton: {
  },
  secondaryButtonLabel: {
    color: Colors.dark.lightYellow,
    textDecorationLine: "underline",
  },
  circleButton: {
    width: circleSize,
    height: circleSize,
    borderRadius: circleSize / 2,
    borderColor: Colors.dark.lightYellowRGBA,
    borderWidth: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});