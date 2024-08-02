import { Dimensions, Text } from "react-native";
import Animated, { Keyframe, runOnJS } from "react-native-reanimated";

import { Option } from "../Option";

type QuestionProps = {
  title: string;
  alternatives: string[];
};

type Props = {
  question: QuestionProps;
  alternativeSelected?: number | null;
  setAlternativeSelected?: (value: number) => void;
  onUnmount: () => void;
};

export function Question({
  question,
  alternativeSelected,
  setAlternativeSelected,
  onUnmount,
}: Props) {
  const enteringKeyframe = new Keyframe({
    0: { opacity: 0, transform: [{ translateX: -100 }, { rotate: "270deg" }] },
    70: { opacity: 0.3 },
    100: { opacity: 1, transform: [{ translateX: 0 }, { rotate: "360deg" }] },
  });

  const exitingKeyframe = new Keyframe({
    0: { opacity: 1, transform: [{ translateX: 0 }, { rotate: "270deg" }] },
    100: { opacity: 0, transform: [{ translateX: 100 }, { rotate: "360deg" }] },
  });

  return (
    <Animated.View
      className={`w-full bg-GREY_700 rounded-xl p-5`}
      entering={enteringKeyframe.duration(500)}
      exiting={exitingKeyframe.duration(500).withCallback((finished) => {
        "worklet";
        if (finished) {
          runOnJS(onUnmount)();
        }
      })}
    >
      <Text className="text-WHITE font-BOLD text-lg text-center mb-4">
        {question.title}
      </Text>

      {question.alternatives.map((alternative, index) => (
        <Option
          key={index}
          title={alternative}
          checked={alternativeSelected === index}
          onPress={() =>
            setAlternativeSelected && setAlternativeSelected(index)
          }
        />
      ))}
    </Animated.View>
  );
}
