import React from "react";
import MapView, { PROVIDER_GOOGLE, PROVIDER_DEFAULT } from "react-native-maps";
import DraggableBottomSheet from "./DraggableBottomSheet";
import { Platform, TouchableOpacity, View } from "react-native";
import MyIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const IobDetail = () => {
  const { goBack } = useNavigation();
  const provider = Platform.OS === "ios" ? PROVIDER_DEFAULT : PROVIDER_GOOGLE;

  return (
    <>
      <MapView
        provider={provider}
        style={{ width: "100%", height: "100%" }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <TouchableOpacity
        onPress={goBack}
        style={{ top: 45, left: 16 }}
        className="flex items-center justify-center rounded-full bg-white w-12 h-12 absolute"
      >
        <MyIcon name="chevron-left" size={30} />
      </TouchableOpacity>
      <DraggableBottomSheet />
    </>
  );
};

export default IobDetail;
