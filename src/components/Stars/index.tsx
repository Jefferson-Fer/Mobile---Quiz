import Animated, { BounceIn } from "react-native-reanimated";

import TrophySvg from "../../assets/trophy.svg";

const Stars = () => {
  return (
    <Animated.View className="justify-center items-center" entering={BounceIn}>
      <TrophySvg width={100} height={100} />
    </Animated.View>
  );
};

export default Stars;
