import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import icons from "../constants/icons";
import { useState } from "react";
const VideoCard = ({
  video: {
    title,
    thumbnail,
    promt,
    video,
    creator: { username, avatar },
  },
}) => {
  const [play, setPlay] = useState(false);

  return (
    <View className="flex-col items-center px-4 mb-14">
      <View className="flex-row gap-3 items-start">
        <View className="flex-row flex-1 justify-center items-center">
          <View className="w-[46px] h-[46px] border border-secondary rounded-lg justify-center items-center p-0.5">
            <Image
              source={{ uri: avatar }}
              resizeMode="cover"
              className="w-full h-full rounded-lg"
            />
          </View>
          <View className="justify-center flex-1 ml-3 gap-y-1 ">
            <Text
              className="text-white font-semibold text-sm"
              numberOfLines={1}
            >
              {title}
            </Text>
            <Text className="text-xs text-gray-100 font-pregular ">
              {username}
            </Text>
          </View>
        </View>
        <View className="pt-2 ">
          <Image source={icons.menu} className="w-5 h-5" resizeMode="contain" />
        </View>
      </View>
      {play ? (
        <Text className="flex-1 justify-center items-center text-3xl text-white">
          {" "}
          playing
        </Text>
      ) : (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setPlay(true)}
          className="w-full h-60 rounded-xl relative mt-3 justify-center items-center "
        >
          <Image
            source={{ uri: thumbnail }}
            className="w-full h-full rounded-xl mt-3"
            resizeMode="cover"
          />
          <Image
            source={icons.play}
            className="w-12 h-12 absolute"
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default VideoCard;
