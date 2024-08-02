import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  title: string;
};

export function OutlineButton({ title, ...rest }: Props) {
  return (
    <TouchableOpacity
      className="flex-1 mr-4 min-h-56 max-h-56 bg-transparent rounded-md items-center justify-center border-2 border-BRAND_MID"
      {...rest}
    >
      <Text className="text-BRAND_MID font-BOLD text-base">{title}</Text>
    </TouchableOpacity>
  );
}
