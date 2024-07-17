import { View, Text, Image } from "react-native";
import React from "react";
import icons from "../../constants/icons";
const Home = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>Home</Text>
      <Image source={icons.home} resizeMode="contain" tintColor={"red"} />
    </View>
  );
};

export default Home;
