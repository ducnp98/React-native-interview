import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef } from "react";
import {
  Animated,
  Dimensions,
  PanResponder,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import MyIcon from "react-native-vector-icons/MaterialCommunityIcons";

const WINDOW_HEIGHT = Dimensions.get("screen").height;
const BOTTOM_SHEET_MAX_HEIGHT = WINDOW_HEIGHT * 0.8;
const BOTTOM_SHEET_MIN_HEIGHT = WINDOW_HEIGHT * 0.1;
const MAX_UPWARD_TRANSLATE_Y =
  BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT;
const MAX_DOWNWARD_TRANSLATE_Y = 0;

interface IProps {
  open: boolean;
  onClose: () => void;
}

const BottomSheetNotify = React.memo<IProps>(({ open, onClose }) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const lastGestureDy = useRef(0);
  const { goBack } = useNavigation()

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderRelease: (e, gesture) => {
        animatedValue.flattenOffset();

        onClose();
      },
    })
  ).current;

  const springAnimation = (direction: "up" | "down") => {
    lastGestureDy.current =
      direction === "down" ? MAX_DOWNWARD_TRANSLATE_Y : MAX_UPWARD_TRANSLATE_Y;
    Animated.spring(animatedValue, {
      toValue: lastGestureDy.current,
      useNativeDriver: true,
    }).start();
  };

  const bottomSheetAnimation = {
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [MAX_UPWARD_TRANSLATE_Y, MAX_DOWNWARD_TRANSLATE_Y],
          outputRange: [MAX_UPWARD_TRANSLATE_Y, MAX_DOWNWARD_TRANSLATE_Y],
          extrapolate: "clamp",
        }),
      },
    ],
  };

  useEffect(() => {
    if (open) {
      springAnimation("up");
    } else {
      springAnimation("down");
    }
  }, [open, springAnimation]);

  const onCloseAndGoback = () => {
    onClose()
    setTimeout(() => {
      goBack()
    }, 500);
  }

  return (
    <>
      <View className="flex-1 bg-red-400">
        <View className="flex-1">
          <Animated.View style={[styles.bottomSheet, bottomSheetAnimation]}>
            <View
              className="w-20 h-10 bg-white mt-2 items-center justify-center self-end"
              {...panResponder.panHandlers}
            >
              <MyIcon name="close" size={30} color="gray" />
            </View>
            <View
              style={{
                height: BOTTOM_SHEET_MAX_HEIGHT - BOTTOM_SHEET_MIN_HEIGHT - 100,
              }}
              className="px-4 flex flex-column justify-between"
            >
              <View className="flex items-center mt-6">
                <View className="relative">
                  <View className="border rounded-full p-6 border-gray-300">
                    <MyIcon name="map" size={100} color="gray" />
                  </View>
                  <View
                    style={{ right: -10 }}
                    className="absolute border rounded-full p-1 border-orange-600 bg-orange-500"
                  >
                    <MyIcon name="exclamation" size={35} color="white" />
                  </View>
                </View>
                <Text className="mt-8 font-bold text-4xl text-center text-gray-700">
                  You have not arrived back at Expo
                </Text>
                <Text className="text-lg mt-4 text-center text-gray-400">
                  Please report back at Foyer 1 to complete the job.
                </Text>
              </View>
              <TouchableOpacity onPress={onCloseAndGoback} className="w-full bg-gray-900 rounded-lg">
                <Text className="text-white text-xl font-bold text-center p-4">
                  Ok
                </Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </View>
      </View>
    </>
  );
});

const styles = StyleSheet.create({
  bottomSheet: {
    position: "absolute",
    width: "100%",
    backgroundColor: "white",
    height: BOTTOM_SHEET_MAX_HEIGHT,
    bottom: -BOTTOM_SHEET_MAX_HEIGHT,
    border: 2,
    borderColor: "red",
    ...Platform.select({
      android: { elevation: 3 },
      ios: {
        shadowColor: "#a8bed2",
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowOffset: {
          width: 2,
          height: 2,
        },
      },
    }),
  },
});

export default BottomSheetNotify;
