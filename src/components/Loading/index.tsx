import { ActivityIndicator, View } from "react-native";

import { THEME } from "@/src/theme/theme";

export function Loading() {
  return (
    <View className="flex-1 items-center justify-center bg-GREY_800">
      <ActivityIndicator color={THEME.COLORS.BRAND_LIGHT} />
    </View>
  );
}
