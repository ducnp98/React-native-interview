import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { SafeAreaView, Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { RootStackParamList } from "../../navigation/StackNavigation";


type Props = NativeStackScreenProps<RootStackParamList, 'Iob'>;

const IobScreen = ({navigation}: Props) => {
  const onGoToDetail = () => {
    navigation.navigate('IobDetail')
  }

  return (
    <SafeAreaView className="flex-1">
      <View className="px-4">
        <Text className="text-3xl text-gray-900 font-bold my-4">Job</Text>
        <View className="flex flex-row gap-2">
          <TouchableOpacity className="flex-1 flex items-center bg-gray-900 rounded-full">
            <Text className="text-white font-bold text-base py-2">Ongoing</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 flex items-center bg-gray-200 rounded-full">
            <Text className="text-gray-400 font-bold text-base py-2">
              Available
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 flex items-center bg-gray-200 rounded-full">
            <Text className="text-gray-400 font-bold text-base py-2">
              History
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity className="mt-9 bg-gray-900 rounded-md px-4 py-5" onPress={onGoToDetail}>
          <View className="flex flex-row justify-between">
            <Text className="text-white text-lg font-bold">Expo Hall 7</Text>
            <View className="flex items-end">
              <Text className="text-white text-lg">$65.00</Text>
              <Text className="text-gray-400 text-xs">in 7 months</Text>
            </View>
          </View>
          <View className="flex flex-row mt-3">
            <View className="w-7 flex items-center">
              <Text>H</Text>
              <View className="w-0.5 h-12 bg-white" />
              <Text>H</Text>
            </View>
            <View className="flex flex-col justify-between">
              <View className="flex flex-row">
                <Text className="text-white font-bold">Expo Hall 7 </Text>
                <Text className="text-gray-400 ">- Expo Hall 7, Singapore</Text>
              </View>
              <View className="flex flex-row">
                <Text>
                  <Text className="text-white font-bold">Far East Plaza </Text>
                  <Text className="text-gray-400">
                    - 14, Scotts Road, Orchard, Singapore. Singapore. 228213
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default IobScreen;
