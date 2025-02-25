import { useEffect } from "react";
import { View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

interface Props {
  total: number;
  current: number;
}

export function ProgressBar({ total, current }: Props) {
  const percentage = Math.round((current / total) * 100);

  const sharedProgress = useSharedValue(percentage);

  const styleAnimated = useAnimatedStyle(() => {
    return {
      width: `${sharedProgress.value}%`,
    };
  });

  useEffect(() => {
    sharedProgress.value = withTiming(percentage);
  }, [current]);

  return (
    <View className="w-full h-2 bg-GREY_500 rounded-lg">
      <Animated.View
        className={`h-2 bg-BRAND_LIGHT rounded-lg`}
        style={styleAnimated}
      />
    </View>
  );
}
