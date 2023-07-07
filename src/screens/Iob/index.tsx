import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import TabMenu from "./TabMenu";
import IobCard from "./IobCard";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/StackNavigation";

type Props = NativeStackScreenProps<RootStackParamList, "Iob">;

const IobScreen = ({navigation}: Props) => {
  const onGoToDetail = () => {
    navigation.navigate("IobDetail");
  };

  return (
    <SafeAreaView className="flex-1">
      <View className="px-4">
        <Text className="text-3xl text-gray-900 font-bold my-4">Job</Text>
        <TabMenu />
        <IobCard onGoToDetail={onGoToDetail} />
      </View>
    </SafeAreaView>
  );
};

export default IobScreen;
