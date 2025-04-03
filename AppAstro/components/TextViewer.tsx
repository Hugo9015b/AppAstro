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
    if (theme === 'primary') {
        return <View style={[styles.titleContainer, style]}>
            <Text style={[styles.primaryLabel, styles.label, textStyle]}>{label}</Text>
        </View>
    } else if (theme === 'secondary') {
        return <View style={styles.titleContainer}>
            <Text style={[styles.secondaryLabel, styles.label, textStyle]}>{label}</Text>
        </View>
    }
}

const styles = StyleSheet.create({
    titleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    primaryLabel: {
        backgroundColor: Colors.dark.lightYellow,
        color: Colors.dark.darkBlue,
    },
    secondaryLabel: {
        color: Colors.dark.lightYellow,
    },
});