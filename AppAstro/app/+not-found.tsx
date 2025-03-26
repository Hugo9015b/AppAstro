import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function NotFoundScreen() {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>404: Page not found</Text>
      <Link href={"/" as any} style={styles.button}>
        Go back to Home
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: "#fff"
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff"
  },
});
