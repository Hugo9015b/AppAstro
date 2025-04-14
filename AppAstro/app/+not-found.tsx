import { useRouter } from 'expo-router';
import { View, StyleSheet } from "react-native";
import { Colors } from '@/constants/Colors';
import ButtonViewer from "@/components/ButtonViewer";
import TextViewer from '@/components/TextViewer';

export default function NotFoundScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TextViewer label='404: Page not found' theme='secondary' />
      <ButtonViewer label="Go back to Home" theme="secondary" onPress={() => router.navigate("/")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.darkBlue,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
