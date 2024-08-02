import { Text, View } from "react-native";

import { ProgressBar } from "../ProgressBar";

interface Props {
  title: string;
  totalOfQuestions: number;
  currentQuestion: number;
}

export function QuizHeader({
  title,
  totalOfQuestions,
  currentQuestion,
}: Props) {
  return (
    <View className="w-full mb-5">
      <Text className="text-GREY_100 font-BOLD text-base mb-10">{title}</Text>

      <View className="flex-row items-center justify-between mb-1">
        <Text className="text-[#C4C4CC]">Questão {currentQuestion}</Text>

        <Text className="text-[#C4C4CC]">
          {currentQuestion}/{totalOfQuestions}
        </Text>
      </View>

      <ProgressBar total={totalOfQuestions} current={currentQuestion} />
    </View>
  );
}
