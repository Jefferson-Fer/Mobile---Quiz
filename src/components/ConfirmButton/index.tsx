import { Check } from "phosphor-react-native";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { THEME } from "@/src/theme/theme";

export function ConfirmButton({ ...rest }: TouchableOpacityProps) {
  return (
    <TouchableOpacity
      {...rest}
      className="flex-row flex-1 h-14 rounded-md bg-BRAND_MID items-center justify-center overflow-hidden"
    >
      <Text className="text-WHITE font-BOLD text-base mr-7">Confirmar</Text>

      <Check color={THEME.COLORS.WHITE} weight="bold" size={24} />
    </TouchableOpacity>
  );
}
