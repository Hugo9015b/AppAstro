import { StyleSheet, View, Pressable, Text } from 'react-native';
import { Colors } from '@/constants/Colors';

type Props = {
  label: string;
  theme?: 'primary';
  onPress?: () => void;
};

export default function Button({ label, theme, onPress }: Props) {

  if (theme === 'primary') {
    return (
      <View
        style={styles.buttonContainer}>
        <Pressable
          style={[styles.button, {
            backgroundColor: Colors.dark.lightYellow,
            borderRadius: 8, paddingVertical: '5%',
            paddingHorizontal: '25%',
            marginBottom: '10%'
          }]}
          onPress={onPress}>
          <Text style={[styles.buttonLabel, { color: Colors.dark.darkBlue }]}>{label}</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={styles.button}
        onPress={onPress}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLabel: {
    color: Colors.dark.lightYellow,
    fontSize: 18,
    fontWeight: 'bold',
  },
});