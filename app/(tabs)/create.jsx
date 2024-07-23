import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native";

const Create = () => {
  return (
    <SafeAreaView>
      <FlatList
        data={[{ key: "1" }, { key: "2" }, { key: "3" }]}
        renderItem={({ item }) => <Text>{item.key}</Text>}
        keyExtractor={(item) => item.key}
      />
    </SafeAreaView>
  );
};

export default Create;
