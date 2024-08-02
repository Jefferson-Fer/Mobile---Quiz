import { useNavigation } from "@react-navigation/native";
import { HouseLine, Trash } from "phosphor-react-native";
import { useEffect, useRef, useState } from "react";
import { Alert, Pressable, ScrollView, View } from "react-native";
import { StyleSheet } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import Animated, {
  LinearTransition,
  SlideInRight,
  SlideOutRight,
} from "react-native-reanimated";

import { Header } from "../components/Header";
import { HistoryCard, HistoryProps } from "../components/HistoryCard";
import { Loading } from "../components/Loading";
import { historyGetAll, historyRemove } from "../storage/quizHistoryStorage";
import { THEME } from "../theme/theme";

const HistoryScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [history, setHistory] = useState<HistoryProps[]>([]);

  const { goBack } = useNavigation();

  const swipeableRef = useRef<Swipeable[]>([]);

  async function fetchHistory() {
    const response = await historyGetAll();
    setHistory(response);
    setIsLoading(false);
  }

  async function remove(id: string) {
    await historyRemove(id);

    fetchHistory();
  }

  function handleRemove(id: string, indexHistory: number) {
    swipeableRef.current[indexHistory]?.close();

    Alert.alert("Remover", "Deseja remover esse registro?", [
      {
        text: "Sim",
        onPress: () => remove(id),
      },
      { text: "Não", style: "cancel" },
    ]);
  }

  useEffect(() => {
    fetchHistory();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View className="flex-1 bg-GREY_800">
      <Header
        title="Histórico"
        subtitle={`Seu histórico de estudos${"\n"}realizados`}
        icon={HouseLine}
        onPress={goBack}
      />

      <ScrollView
        contentContainerStyle={styles.history}
        showsVerticalScrollIndicator={false}
      >
        {history.map((item, index) => (
          <Animated.View
            key={item.id}
            entering={SlideInRight}
            exiting={SlideOutRight}
            layout={LinearTransition.springify()}
          >
            <Swipeable
              ref={(ref) => {
                if (ref) {
                  swipeableRef.current[index] = ref;
                }
              }}
              overshootLeft={false}
              containerStyle={{
                width: "100%",
                backgroundColor: THEME.COLORS.DANGER_LIGHT,
                borderRadius: 6,
                height: 96,
                marginBottom: 10,
              }}
              leftThreshold={10}
              onSwipeableOpen={() => handleRemove(item.id, index)}
              renderRightActions={() => null}
              renderLeftActions={() => (
                <View className="w-24 h-24 justify-center items-center rounded-md bg-DANGER_LIGHT">
                  <Trash size={32} color={THEME.COLORS.GREY_100} />
                </View>
              )}
            >
              <HistoryCard data={item} />
            </Swipeable>
          </Animated.View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  history: {
    flexGrow: 1,
    padding: 32,
  },
});

export default HistoryScreen;
