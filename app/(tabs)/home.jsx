import { View, Text, Image, RefreshControl, Alert } from "react-native";
import React, { useState, useEffect } from "react";
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
import { getAllPosts, getLatestPost } from "../../lip/appwrite";
import useAppwrite from "../../lip/useAppwrite";
import VideoCard from "../../components/VideoCard";
const Home = () => {
  const { data: posts, refetch } = useAppwrite(getAllPosts);
  const { data: latestPost } = useAppwrite(getLatestPost);

  const user = useGlobalContext();

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = async () => {
    setRefreshing(true);
    //recall vids
    await refetch();
    setRefreshing(false);
  };
  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        className="bg-primary"
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <VideoCard video={item} />}
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
              <Trending posts={latestPost ?? []} />
            </View>
          </View>
        }
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subtitle="Be the first one to upload a video"
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
      <StatusBar backgroundColor="#161612" style="light" />
    </SafeAreaView>
  );
};

export default Home;
