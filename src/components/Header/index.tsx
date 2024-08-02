import { IconProps } from "phosphor-react-native";
import { Text, TouchableOpacity, View } from "react-native";

import { THEME } from "@/src/theme/theme";

type Props = {
  title: string;
  subtitle: string;
  onPress: () => void;
  icon: React.FC<IconProps>;
};

export function Header({ title, subtitle, icon: Icon, onPress }: Props) {
  return (
    <View className="w-full flex-row items-center justify-between px-8 pt-14 pb-6 bg-GREY_600">
      <View>
        <Text className="text-GREY_100 font-BOLD text-2xl">{title}</Text>

        <Text className="text-GREY_100 font-REGULAR text-sm">{subtitle}</Text>
      </View>

      <TouchableOpacity
        className="w-11 h-11 rounded-md items-center justify-center bg-GREY_800"
        activeOpacity={0.7}
        onPress={onPress}
      >
        <Icon size={28} color={THEME.COLORS.GREY_100} />
      </TouchableOpacity>
    </View>
  );
}
