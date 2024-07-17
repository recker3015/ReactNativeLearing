import { Text, View, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import images from "../../constants/images";
import FormField from "../../components/FormField";
const SignIn = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full px-4 justify-center items-center my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115] h-[35px] "
          />
          <Text className="text-white text-center text-2xl font-psemibold mt-8">
            Login to TreeHouse
          </Text>
          <FormField />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161612" style="light" />
    </SafeAreaView>
  );
};

export default SignIn;
