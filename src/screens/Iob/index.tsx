import React from "react";
import { SafeAreaView, Text, View, TouchableOpacity } from "react-native";
import TabMenu from "./TabMenu";
import IobCard from "./IobCard";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/StackNavigation";
import MyIcon from "react-native-vector-icons/MaterialCommunityIcons";
import LinearGradient from "react-native-linear-gradient";

type Props = NativeStackScreenProps<RootStackParamList, "TabNavigation">;

const IobScreen = ({ navigation }: Props) => {
  const onGoToDetail = () => {
    navigation.navigate("IobDetail");
  };

  return (
    <SafeAreaView className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500">
      <LinearGradient className="flex-1" colors={["white", "white", "white", "gray"]}>
        <View className="px-4">
          <Text className="text-3xl text-gray-900 font-bold my-4">Job</Text>
          <TabMenu />
          <IobCard onGoToDetail={onGoToDetail} />
        </View>
        <TouchableOpacity
          className="absolute rounded-full p-3 bg-white"
          style={{ bottom: 30, left: 30 }}
        >
          <MyIcon name="lightning-bolt" color="orange" size={24} />
        </TouchableOpacity>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default IobScreen;
