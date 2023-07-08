import React from "react";
import { Text, View } from "react-native";
import MyIcon from "react-native-vector-icons/MaterialCommunityIcons";


const Information = () => {
  return (
    <View>
      <View className="flex flex-row py-7">
        <View className="flex w-20 items-center">
          <View className="w-12 h-12 bg-blue-600 flex items-center justify-center rounded-full">
            <MyIcon name="shield-check" size={26} color="white" />
          </View>
        </View>
        <View style={{ flex: 8 }}>
          <Text className="text-lg text-blue-600 font-bold">STANDARD RIDE</Text>
        </View>
      </View>
      <View className="flex flex-row py-2">
        <View className="flex w-20 items-center gap-1">
          <MyIcon name="human-male-child" size={24} color='#0450d2' />
          <View className="w-0.5 h-32 bg-blue-600" />
          <MyIcon name="circle" size={18} color='#0450d2'/>
        </View>
        <View style={{ flex: 8 }} className="flex flex-column justify-between">
          <View>
            <Text className="text-2xl text-gray-800 font-bold">Expo Hall 7</Text>
            <Text className="text-base text-gray-300">Expo Hall 7, Singapore</Text>
            <Text className="text-base text-lime-500 font-bold">Picked up</Text>
          </View>
          <Text className="text-base text-blue-600">6:06pm</Text>
        </View>
      </View>
      <View className="flex flex-row py-2">
        <View className="flex w-20" />
        <View style={{ flex: 8 }} className="flex flex-column justify-between">
          <View>
            <Text className="text-2xl text-gray-800 font-bold">Far East Plaza</Text>
            <Text className="text-base text-gray-300">14, Scotts road, Orchard, Singapore, Singapore, 228213</Text>
            <Text className="text-base text-lime-500 font-bold">Dropped - off</Text>
          </View>
          <Text className="text-base text-blue-600">6:06pm</Text>
        </View>
      </View>
      <View className="flex flex-row justify-between mt-8 items-center px-6">
        <Text className="text-base">Job Date</Text>
        <Text className="font-bold text-gray-800 text-base">12/12/2023</Text>
      </View>
    </View>
  );
};

export default Information;
