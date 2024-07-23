import { View, Text, Image, Alert } from "react-native";
import React from "react";
import { Link, Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../constants/images";
import { ScrollView } from "react-native";
import CustomButton from "../components/CustomButton";
import { StatusBar } from "expo-status-bar";
import { useGlobalContext } from "../context/GlobalProvider";
const Index = () => {
  const { isLoggedIn, isLoading } = useGlobalContext();
  if (!isLoading && isLoggedIn) {
    return <Redirect href="/home" />;
  }
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full items-center justify-center min-h-[89vh] px-4">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[130px] h-[84px] "
          />
          <Image
            source={images.cards}
            resizeMode="contain"
            className="max-w-[380px] w-full h-[300px]"
          />
          <View className="relative mt-5">
            <Text className="text-2xl text-white text-center font-bold">
              {" "}
              Discover free Rents and PG's With{" "}
              <Text className="text-secondary-200">TreeHouse</Text>
            </Text>
            <Image
              source={images.path}
              className="absolute w-[136px] h-[15px] -bottom-[9px] right-[80px]"
            />
          </View>
          <Text className="text-sm font-pregular text-white text-center mt-6">
            {" "}
            This is community driven free to use, find rents nearby and post
            rented rooms{" "}
          </Text>
          <CustomButton
            title="Continue"
            handlePress={() => router.push("/sign-in")}
            containerStyle="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161612" style="light" />
    </SafeAreaView>
  );
};

export default Index;
