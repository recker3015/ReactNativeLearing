import { View, Text, Image } from "react-native";
import React from "react";
import images from "../constants/images";
const EmptyState = ({ title, subtitle }) => {
  return (
    <View className="flex-1 justify-center items-center px-4">
      <Image
        source={images.empty}
        resizeMode="contain"
        className="w-[270px] h-[215px]"
      />

      <Text className="text-gray-200 text-sm font-pregular">{subtitle}</Text>
      <Text className="text-white font-pbold text-xl">{title}</Text>
    </View>
  );
};

export default EmptyState;
