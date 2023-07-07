import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const TabMenu = () => {
  return (
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
        <Text className="text-gray-400 font-bold text-base py-2">History</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TabMenu;
