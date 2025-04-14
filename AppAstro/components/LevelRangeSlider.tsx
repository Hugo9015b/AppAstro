import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import { Colors } from "@/constants/Colors";

type Props = {
  label: string;
  min?: number;
  max?: number;
  values: [number, number];
  onValuesChange: (vals: [number, number]) => void;
};

export default function LevelRangeSlider({
  label,
  min = 1,
  max = 88,
  values,
  onValuesChange,
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}: {values[0]} – {values[1]}</Text>
      <MultiSlider
        values={values}
        sliderLength={280}
        onValuesChange={vals => onValuesChange([vals[0], vals[1]])}
        min={min}
        max={max}
        step={1}
        selectedStyle={{ backgroundColor: Colors.dark.darkBlue }}
        unselectedStyle={{ backgroundColor: Colors.dark.lightYellowRGBA_low_opacity }}
        markerStyle={{ backgroundColor: Colors.dark.darkBlue }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.dark.darkBlue,
    marginBottom: 8,
  },
});
