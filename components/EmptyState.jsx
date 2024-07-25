import { View, Text, Image } from "react-native";
import React from "react";
import images from "../constants/images";
import CustomButton from "../components/CustomButton";
import { router } from "expo-router";
const EmptyState = ({ title, subtitle }) => {
  return (
    <View className="flex-1 justify-center items-center px-4">
      <Image
        source={images.empty}
        resizeMode="contain"
        className="w-[270px] h-[215px]"
      />
      <Text className="text-white font-psemibold text-xl">{title}</Text>
      <Text className="text-gray-200 text-sm font-pregular">{subtitle}</Text>

      <CustomButton
        title="Create a video"
        handlePress={() => router.push("/create")}
        containerStyle="w-full my-5"
      />
    </View>
  );
};

export default EmptyState;
