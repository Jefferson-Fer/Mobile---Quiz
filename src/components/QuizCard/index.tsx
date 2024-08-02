import {
  Dimensions,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";

import { THEME } from "@/src/theme/theme";

import { QUIZZES } from "../../data/quizzes";
import { LevelBars } from "../LevelBars";

const TouchableOpacityAnimated =
  Animated.createAnimatedComponent(TouchableOpacity);

type Props = TouchableOpacityProps & {
  data: (typeof QUIZZES)[0];
  index: number;
};

export function QuizCard({ data, index, ...rest }: Props) {
  const Icon = data.svg;

  return (
    <TouchableOpacityAnimated
      className={`w-40 h-44 bg-GREY_700 rounded-md p-4 m-1`}
      entering={FadeInUp.delay(index * 100)}
      {...rest}
    >
      <View className="flex-row items-center justify-between">
        <View className="w-10 h-10 bg-GREY_600 rounded-md items-center justify-center">
          {Icon && <Icon size={24} color={THEME.COLORS.GREY_100} />}
        </View>

        <LevelBars level={data.level} />
      </View>

      <Text className="flex-1 text-GREY_100 font-REGULAR truncate text-base text-center mt-6">
        {data.title}
      </Text>
    </TouchableOpacityAnimated>
  );
}
