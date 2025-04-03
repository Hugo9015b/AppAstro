import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Slider from '@react-native-community/slider';
import { Colors } from '@/constants/Colors';

const { width } = Dimensions.get("screen");
const _imageWidth = width * 0.6;
const _imageHeight = _imageWidth * 0.05;

type Props = {
    label: string,
}

export default function CustomSlider({ label }: Props) {
  const [value, setValue] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.progressText}>{label}</Text>
      <Slider
        style={{ width: "100%" }}
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor={Colors.dark.darkBlue}
        maximumTrackTintColor={Colors.dark.darkBlue}
        thumbTintColor={Colors.dark.darkBlue}
        value={value}
        onValueChange={setValue}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.4,
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
    marginBottom: "8%"
},
});
