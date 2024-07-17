import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const CustomButton = ({
  title,
  handlePress,
  containerStyle,
  textStyle,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      className={`${containerStyle} bg-secondary text-center justify-center items-center min-h-[64px] rounded-xl ${
        isLoading ? "opacity-50" : ""
      } `}
      disabled={isLoading}
      onPress={handlePress}
      activeOpacity={0.8}
    >
      <Text className={`text-white font-psemibold  text-lg ${textStyle}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
