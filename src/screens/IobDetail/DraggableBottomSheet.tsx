import React, { useRef } from "react";
import {
  Animated,
  PanResponder,
  Platform,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Information from "./Information";
import MyIcon from "react-native-vector-icons/MaterialCommunityIcons";
import HeaderInformation from "./HeaderInformation";

const WINDOW_HEIGHT = Dimensions.get("screen").height;
const BOTTOM_SHEET_MAX_HEIGHT = WINDOW_HEIGHT * 1;
const BOTTOM_SHEET_MIDDLE_HEIGHT = WINDOW_HEIGHT * 0.6;
const BOTTOM_SHEET_MIN_HEIGHT = WINDOW_HEIGHT * 0.23;
const MAX_MIDDLE_TRANSLATE_Y =
  BOTTOM_SHEET_MIDDLE_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT;
const MAX_UPWARD_TRANSLATE_Y =
  BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT;
const MAX_DOWNWARD_TRANSLATE_Y = 0;
const DRAG_THRESHOLD = 50;

const DraggableBottomSheet = () => {
  const animatedValue = useRef(
    new Animated.Value(MAX_MIDDLE_TRANSLATE_Y)
  ).current;
  const lastGestureDy = useRef(MAX_MIDDLE_TRANSLATE_Y);
  const lastState = useRef("middle");

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderRelease: (e, gesture) => {
        animatedValue.flattenOffset();
        lastGestureDy.current += gesture.dy;
        if (gesture.dy === 0) return;
        if (gesture.dy > 0) {
          if (gesture.dy <= DRAG_THRESHOLD) {
            if (lastState.current === "up") {
              springAnimation("up");
              lastState.current = "up";
            } else {
              springAnimation("middle");
              lastState.current = "middle";
            }
          } else {
            if (lastState.current === "up") {
              springAnimation("middle");
              lastState.current = "middle";
            } else {
              springAnimation("down");
              lastState.current = "down";
            }
          }
        } else {
          if (gesture.dy >= -DRAG_THRESHOLD) {
            if (lastState.current === "down") {
              springAnimation("down");
              lastState.current = "down";
            } else {
              springAnimation("middle");
              lastState.current = "middle";
            }
          } else {
            if (lastState.current === "down") {
              springAnimation("middle");
              lastState.current = "middle";
            } else {
              springAnimation("up");
              lastState.current = "up";
            }
          }
        }
      },
    })
  ).current;

  const springAnimation = (direction: "up" | "down" | "middle") => {
    lastGestureDy.current =
      direction === "down"
        ? MAX_DOWNWARD_TRANSLATE_Y
        : direction === "up"
        ? MAX_UPWARD_TRANSLATE_Y
        : MAX_MIDDLE_TRANSLATE_Y;

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

  return (
          <Animated.View style={[styles.bottomSheet, bottomSheetAnimation]}>
            <TouchableOpacity
              className="absolute rounded-full p-2.5 bg-white"
              style={{ top: -70, right: 20 }}
            >
              <MyIcon name="crosshairs-gps" size={26} />
            </TouchableOpacity>
            <View
              className="w-full h-full bg-white rounded-t-xl"
              {...panResponder.panHandlers}
            >
              <View>
                <HeaderInformation />
                <Information />
              </View>
            </View>
          </Animated.View>
  );
};

const styles = StyleSheet.create({
  bottomSheet: {
    position: "absolute",
    width: "100%",
    backgroundColor: "white",
    height: BOTTOM_SHEET_MAX_HEIGHT,
    bottom: BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT,
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
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
});

export default DraggableBottomSheet;
