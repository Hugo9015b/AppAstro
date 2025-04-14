import {
    StyleSheet,
    View,
    Text,
    StyleProp,
    TextStyle,
    ViewStyle,
} from 'react-native';
import { Colors } from '@/constants/Colors';

type Props = {
    label: string;
    theme: 'primary' | 'secondary';
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
};

export default function TextViewer({
    label,
    theme,
    style,
    textStyle,
}: Props) {
    return (
        <View style={[
            styles.titleContainer,
            style
        ]}>
            <Text style={[
                theme === 'primary'
                ? styles.primaryLabel
                : styles.secondaryLabel,
                styles.label,
                textStyle
            ]}>
                {label}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        borderRadius: 10,
    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 10,
        padding: 10,
    },
    primaryLabel: {
        backgroundColor: Colors.dark.lightYellowRGBA_low_opacity,
        color: Colors.dark.darkBlue,
    },
    secondaryLabel: {
        color: Colors.dark.lightYellow,
    },
});