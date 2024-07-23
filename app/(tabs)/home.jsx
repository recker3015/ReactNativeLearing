import { View, Text, Image } from "react-native";
import React from "react";
import icons from "../../constants/icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native";
import { useGlobalContext } from "../../context/GlobalProvider";
import images from "../../constants/images";
import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native";
import SearchInput from "../../components/SearchInput";
import Trending from "../../components/Trending";
import EmptyState from "../../components/EmptyState";
const Home = () => {
  const user = useGlobalContext();
  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        className="bg-primary"
        // data={[{ key: "1" }, { key: "2" }, { key: "3" }]}
        data={[]}
        renderItem={({ item }) => (
          <Text className="text-white">{item.key}</Text>
        )}
        keyExtractor={(item) => item.key}
        ListHeaderComponent={
          <View className="space-y-6 my-6 px-6">
            <View className="flex-1 justify-between  flex-row mb-6">
              <View>
                <Text className="text-gray-200 font-pmedium ">
                  Welcome Back
                </Text>
                <Text className="text-white font-pbold text-xl">ABHISHEK</Text>
              </View>
              <Image
                source={images.profile}
                resizeMode="contain"
                className="w-14 h-14 rounded-full "
              />
            </View>
            <SearchInput />
            <View className=" w-full flex-1 pt-5 pb-8">
              <Text className="text-white font-pregular">Latest Videos</Text>
              <Trending posts={[{ id: "1" }, { id: "2" }, { id: "3" }] ?? []} />
            </View>
          </View>
        }
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subtitle="Be the first one to upload"
          />
        )}
      />
      <StatusBar backgroundColor="#161612" style="light" />
    </SafeAreaView>
  );
};

export default Home;
