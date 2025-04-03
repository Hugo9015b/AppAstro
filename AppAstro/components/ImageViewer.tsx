import { Dimensions, StyleSheet, StyleProp, ImageStyle } from "react-native";
import { Image, type ImageSource } from "expo-image";

type Props = {
    imgSource: ImageSource;
    style?: StyleProp<ImageStyle>;
    width?: number;
    height?: number;
    imageMode?: "cover" | "contain" | "fill" | "none" | "scale-down";
};

const { width } = Dimensions.get("screen");
const _imageWidth = width * 0.7;
const _imageHeight = _imageWidth * 1.76;

export default function ImageViewer({ imgSource, style, width, height, imageMode }: Props) {
    return (
        <Image
            source={imgSource}
            contentFit={imageMode ?? "cover"}
            style={[
                styles.image,
                { width: width ?? _imageWidth, height: height ?? _imageHeight },
                style,
            ]} />
    )
}

const styles = StyleSheet.create({
    image: {
        borderRadius: 18,
    }
});