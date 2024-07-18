import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { TextInput } from "react-native";
import { useState } from "react";
import icons from "../constants/icons";
const FormField = ({
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
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>

      <View className="bg-black-100 rounded-xl border border-black-200 py-3 px-1 items-center flex-row focus:border-secondary-200">
        <TextInput
          className="flex-1 text-white text-base font-psemibold px-1"
          value={value}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPasswordd}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPasswordd)}>
            <Image
              source={!showPasswordd ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
