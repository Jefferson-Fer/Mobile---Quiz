import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  title: string;
};

export function Button({ title, ...rest }: Props) {
  return (
    <TouchableOpacity
      {...rest}
      className="flex-1 min-h-16 max-h-16 rounded-md bg-BRAND_MID items-center justify-center"
    >
      <Text className="text-WHITE font-BOLD text-base">{title}</Text>
    </TouchableOpacity>
  );
}
