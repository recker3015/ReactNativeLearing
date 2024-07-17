import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
const Index = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-2xl font-psemibold">Hello Abhi</Text>
      <Link href="/home" className="underline font-bold text-purple-700">
        Goto Home
      </Link>
    </View>
  );
};

export default Index;
