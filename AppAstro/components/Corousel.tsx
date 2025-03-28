import { useRef } from "react";
import { Dimensions, View, StyleSheet } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel, {
    ICarouselInstance,
    Pagination,
} from "react-native-reanimated-carousel";
import { Image } from "expo-image";

const width = Dimensions.get("window").width;

const images = [
    require('@/assets/images/antlia.jpg'),
    require('@/assets/images/andromeda.jpg'),
];

export function BasicCarousel() {
    const ref = useRef<ICarouselInstance>(null);
    const progress = useSharedValue<number>(0);

    const onPressPagination = (index: number) => {
        ref.current?.scrollTo({
            count: index - progress.value,
            animated: true,
        });
    };

    return (
        <View style={{ margin: '10%' }}>
            <Carousel
                ref={ref}
                width={width / 1.1}
                height={width * 1.2}
                data={images}
                onProgressChange={progress}
                renderItem={({ item }) => (
                    <View style={styles.slide}>
                        <Image source={item} style={styles.image} contentFit="cover" />
                    </View>
                )}
            />

            <Pagination.Basic
                progress={progress}
                data={images}
                dotStyle={{
                    backgroundColor: "#EFE9D5",
                    opacity: 0.5,
                    borderRadius: 50,
                    width: 10,
                    height: 10,
                }}
                activeDotStyle={{
                    backgroundColor: "#EFE9D5",
                    opacity: 1,
                    borderRadius: 50,
                    width: 10,
                    height: 10,
                }}
                containerStyle={{ gap: 5, marginTop: 10 }}
                onPress={onPressPagination}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    slide: {
      justifyContent: "center",
      alignItems: "center",
    },
    image: {
      width: "100%",
      height: "100%",
      borderWidth: 4,
      borderColor: "#71BBB2",
      borderRadius: 18,
    },
  });