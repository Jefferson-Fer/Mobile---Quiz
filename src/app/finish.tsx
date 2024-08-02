import { useRoute } from "@react-navigation/native";
import { router } from "expo-router";
import { Text, View } from "react-native";

import { Button } from "../components/Button";
import Stars from "../components/Stars";

interface Params {
  total: string;
  points: string;
}

const FinishScreen = () => {
  const route = useRoute();
  const { points, total } = route.params as Params;

  return (
    <View className="flex-1 justify-center bg-GREY_800 p-8">
      <Stars />

      <View className="items-center mb-20">
        <Text className="text-gray-100 font-BOLD text-2xl mt-10">
          Parabéns!
        </Text>

        <Text className="text-gray-100 font-REGULAR text-base mt-2">
          Você acertou {points} de {total} questões
        </Text>
      </View>

      <Button title="Ir para o início" onPress={() => router.replace("/")} />
    </View>
  );
};

export default FinishScreen;
