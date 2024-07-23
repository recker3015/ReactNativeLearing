import { Text, View, ScrollView, Image, Alert } from "react-native";
import { React, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import images from "../../constants/images";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";
import { createUser } from "../../lip/appwrite";
import { router } from "expo-router";
const SignUp = () => {
  const [form, setFrom] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submit = async () => {
    if (!form.username || !form.email || !form.password) {
      Alert.alert("Please fill all the fields");
    }
    setIsSubmitting(true);
    try {
      console.log(form);
      const result = await createUser(form.email, form.password, form.username);

      router.replace("/home");
    } catch (error) {
      Alert.alert(error.message);
    } finally {
      setIsSubmitting(false);
    }
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
            SignUp to TreeHouse
          </Text>
          <FormField
            title="Username"
            placeholder="Enter your userName"
            value={form.username}
            handleChangeText={(e) => setFrom({ ...form, username: e })}
            otherStyles="mt-6 w-full"
            keyBoardType="user-name"
          />
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
            title={isSubmitting ? "Please wait" : "SignUp"}
            handlePress={submit}
            containerStyle="w-full mt-7"
            isLoading={isSubmitting}
          />

          <Text className="text-gray-100 text-center text-base font-plight mt-6">
            {" "}
            Already have an account?{" "}
            <Link href="/sign-in" className="text-secondary-200 font-psemibold">
              SignIn
            </Link>
          </Text>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161612" style="light" />
    </SafeAreaView>
  );
};

export default SignUp;
