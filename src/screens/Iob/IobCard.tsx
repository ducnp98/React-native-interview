import React, { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

interface IProps { 
  onGoToDetail: () => void
}

const IobCard: FC<IProps> = ({onGoToDetail}) => {

  return (
    <TouchableOpacity
      className="mt-9 bg-gray-900 rounded-md px-4 py-5"
      onPress={onGoToDetail}
    >
      <View className="flex flex-row justify-between">
        <Text className="text-white text-lg font-bold">Expo Hall 7</Text>
        <View className="flex items-end">
          <Text className="text-white text-lg">$65.00</Text>
          <Text className="text-gray-400 text-xs">in 7 months</Text>
        </View>
      </View>
      <View className="flex flex-row mt-3">
        <View className="flex flex-col justify-between gap-2">
          <View className="flex flex-row">
            <View className="flex items-center w-7">
              <Icon name="human-male" color="white" size={25} />
            </View>
            <View className="flex flex-row">
              <Text className="text-white font-bold">Expo Hall 7 </Text>
              <Text className="text-gray-400 ">- Expo Hall 7, Singapore</Text>
            </View>
          </View>
          <View className="flex flex-row">
            <View className="flex items-center w-7">
              <View className="w-0.5 h-12 bg-white" />
            </View>
            <View className="flex flex-1" />
          </View>
          <View className="flex flex-row">
            <View className="flex items-center w-7">
              <Icon name="circle" color="white" size={16} />
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
      </View>
    </TouchableOpacity>
  );
};

export default IobCard;
