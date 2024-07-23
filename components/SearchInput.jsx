import { View, Text } from "react-native";
import React from "react";
import icons from "../constants/icons";
import { useState } from "react";
import { TextInput, TouchableOpacity, Image } from "react-native";
const SearchInput = ({
  title,
  placeholder,
  value,
  handleChangeText,
  otherStyles,
  keyBoardType,
  ...props
}) => {
  const [form, setFrom] = useState({
    email: "",
    password: "",
  });
  const [showPasswordd, setShowPassword] = useState(false);

  return (
    <View className="bg-black-100 rounded-2xl border-2 border-black-200 h-16 px-4 w-full items-center flex-row focus:border-secondary space-x-4">
      <TextInput
        className="flex-1 text-base mt-0.5 text-white font-pregular"
        value={value}
        placeholderTextColor="#7b7b8b"
        onChangeText={handleChangeText}
        secureTextEntry={false}
      />
      <View className="">
        <TouchableOpacity>
          <Image
            source={icons.search}
            className="w-5 h-5"
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchInput;
