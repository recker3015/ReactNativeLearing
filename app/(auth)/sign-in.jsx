import { Text, View, ScrollView, Image } from "react-native";
import { React, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import images from "../../constants/images";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";

const SignIn = () => {
  const [form, setFrom] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submit = () => {
    // setIsSubmitting(!isSubmitting);
    console.log(form);
  };
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full px-4 justify-center min-h-[85vh] items-center my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115] h-[35px] "
          />
          <Text className="text-white text-center text-2xl font-psemibold mt-8">
            Login to TreeHouse
          </Text>
          <FormField
            title="Email"
            placeholder="Enter your email"
            value={form.email}
            handleChangeText={(e) => setFrom({ ...form, email: e })}
            otherStyles="mt-6 w-full"
            keyBoardType="email-address"
          />
          <FormField
            title="Password"
            placeholder="Enter your password"
            value={form.password}
            handleChangeText={(e) => setFrom({ ...form, password: e })}
            otherStyles="mt-6 w-full"
          />

          <CustomButton
            className={`${isSubmitting ? "opacity-50" : ""}`}
            title={isSubmitting ? "Please wait" : "Login"}
            handlePress={submit}
            containerStyle="w-full mt-7"
            isLoading={isSubmitting}
          />

          <Text className="text-gray-100 text-center text-base font-plight mt-6">
            {" "}
            Don't have an account?{" "}
            <Link href="/sign-up" className="text-secondary-200 font-psemibold">
              SignUp
            </Link>
          </Text>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161612" style="light" />
    </SafeAreaView>
  );
};

export default SignIn;
