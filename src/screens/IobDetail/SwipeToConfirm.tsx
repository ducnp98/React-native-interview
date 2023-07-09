import React from "react";
import { Text, View } from "react-native";
import Slider from "react-native-slide-to-unlock";
import MyIcon from "react-native-vector-icons/MaterialCommunityIcons";

interface IProps {
  onOpenNotify: () => void
}

const SwipeToConfirm: React.FC<IProps> = ({onOpenNotify}) => {
  return (
    <View className="px-4 mt-10">
      {/* @ts-ignore */}
      <Slider
        onEndReached={() => {
          onOpenNotify()
        }}
        containerStyle={{
          backgroundColor: "#0450d2",
          borderRadius: 50,
          overflow: "hidden",
          alignItems: "center",
          justifyContent: "center",
        }}
        sliderElement={
          <View className="rounded-full m-1 h-12 w-12 bg-white flex items-center justify-center">
            <MyIcon size={30} name="gesture-swipe-horizontal" color="gray" />
          </View>
        }
      >
        <Text className="text-lg text-gray-200 font-bold">Completed</Text>
      </Slider>
    </View>
  );
};

export default SwipeToConfirm;
