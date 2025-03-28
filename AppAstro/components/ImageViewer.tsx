import { Dimensions, StyleSheet, StyleProp, ImageStyle } from "react-native";
import { Image, type ImageSource } from "expo-image";

type Props = {
    imgSource: ImageSource;
    style?: StyleProp<ImageStyle>;
    width?: number;
    height?: number;
}

const { width } = Dimensions.get("screen");
const _imageWidth = width * 0.7;
const _imageHeight = _imageWidth * 1.76;

export default function ImageViewer({ imgSource, style, width, height }: Props) {
    return <Image source={imgSource} style={[
        styles.image,
        { width: width ?? _imageWidth, height: height ?? _imageHeight },
        style,
    ]} />;
}

const styles = StyleSheet.create({
    image: {
        borderRadius: 18,
        margin: '10%'
    }
});