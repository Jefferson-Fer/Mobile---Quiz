import { View } from "react-native";

type Props = {
  level: number;
};

export function LevelBars({ level }: Props) {
  return (
    <View className="flex-row items-end">
      <View className="w-1 h-1.5 rounded-md ml-1 bg-BRAND_LIGHT" />
      <View
        className={`w-1 h-3 rounded-md ml-1 ${level > 1 ? "bg-WARNING_LIGHT" : "bg-GREY_500"}`}
      />
      <View
        className={`w-1 h-5 rounded-md ml-1 ${level > 2 ? "bg-DANGER_LIGHT" : "bg-GREY_500"}`}
      />
    </View>
  );
}
