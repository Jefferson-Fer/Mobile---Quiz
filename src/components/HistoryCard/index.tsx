import { Text, View } from "react-native";

import { LevelBars } from "../LevelBars";

export type HistoryProps = {
  id: string;
  title: string;
  points: number;
  questions: number;
  level: number;
};

type Props = {
  data: HistoryProps;
};

export function HistoryCard({ data }: Props) {
  return (
    <View className="w-full h-24 mb-3 rounded-md flex-row items-center justify-center bg-GREY_700">
      <View>
        <Text className="text-GREY_100 font-BOLD text-base">{data.title}</Text>

        <Text className="text-GREY_300 font-REGULAR text-xs">
          Você acertou {data.points} de {data.questions}
        </Text>
      </View>

      <LevelBars level={data.level} />
    </View>
  );
}
