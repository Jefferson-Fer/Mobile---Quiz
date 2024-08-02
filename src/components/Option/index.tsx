import {
  BlurMask,
  Canvas,
  Circle,
  Path,
  Skia,
} from "@shopify/react-native-skia";
import { useEffect } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Easing, useSharedValue, withTiming } from "react-native-reanimated";

import { THEME } from "@/src/theme/theme";

type Props = TouchableOpacityProps & {
  checked: boolean;
  title: string;
};

const CHECK_SIZE = 28;
const CHECK_STROKE = 2;

export function Option({ checked, title, ...rest }: Props) {
  const percentage = useSharedValue(0);
  const circle = useSharedValue(0);

  const RADIUS = (CHECK_SIZE - CHECK_STROKE) / 2;
  const CIRCLE_RADIUS = RADIUS / 2;

  const path = Skia.Path.Make();
  path.addCircle(CHECK_SIZE, CHECK_SIZE, RADIUS);

  useEffect(() => {
    if (checked) {
      percentage.value = withTiming(1, { duration: 400 });
      circle.value = withTiming(CIRCLE_RADIUS, { easing: Easing.bounce });
    } else {
      percentage.value = withTiming(0, { duration: 400 });
      circle.value = withTiming(0, { duration: 400 });
    }
  }, [checked]);

  return (
    <TouchableOpacity
      className={`w-full h-[min-content] bg-GREY_800 rounded-md flex-row items-center justify-between px-4 py-1 mb-3 ${checked ? "border-2 border-BRAND_LIGHT" : ""}`}
      {...rest}
    >
      <Text className="flex-1 text-GREY_100 font-REGULAR text-sm">{title}</Text>
      <Canvas style={{ width: CHECK_SIZE * 2, height: CHECK_SIZE * 2 }}>
        <Path
          path={path}
          style="stroke"
          color={THEME.COLORS.GREY_500}
          strokeWidth={CHECK_STROKE}
        />

        <Path
          path={path}
          style="stroke"
          color={THEME.COLORS.BRAND_LIGHT}
          strokeWidth={CHECK_STROKE}
          start={0}
          end={percentage}
        >
          <BlurMask blur={1} style="solid" />
        </Path>

        <Circle
          cx={CHECK_SIZE}
          cy={CHECK_SIZE}
          r={circle}
          color={THEME.COLORS.BRAND_LIGHT}
        >
          <BlurMask blur={4} style="solid" />
        </Circle>
      </Canvas>
    </TouchableOpacity>
  );
}
