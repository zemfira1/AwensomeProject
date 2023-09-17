import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CreatePost } from "../CreatePostsScreen/CreatePostsScreen";
import { Profile } from "../ProfileScreen/ProfileScreen";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Posts } from "../PostsScreen/PostsScreen";

export const Home = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.navigate("Home", {
      screen: "Posts",
    });
  });

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <MyTabs />
    </View>
  );
};

const Tab = createBottomTabNavigator();

export const MyTabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        flexDirection: "row",
        height: 88,
        backgroundColor: "#FFFFFF",
        borderTopWidth: 1,
        borderTopColor: "#BDBDBD",
        shadowColor: "rgba(0, 0, 0, 0.3)",
        gap: 60,
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          if (route.name === "Posts") {
            return (
              <Ionicons
                name={focused ? "md-grid-outline" : "md-grid-outline"}
                size={24}
                color={color}
              />
            );
          } else if (route.name === "CreatePost") {
            return (
              <Ionicons
                name={focused ? "add" : "add"}
                size={13}
                color={color}
              />
            );
          } else if (route.name === "Profile") {
            return (
              <Ionicons
                name={focused ? "person-outline" : "person-outline"}
                size={24}
                color={color}
              />
            );
          }
        },
        tabBarInactiveTintColor: "#bdbdbd",
        tabBarActiveTintColor: "#fff",
        tabBarItemStyle: {
          //position: "absolute",
          borderRadius: 20,
          width: 70,
          height: 40,
          marginBottom: 22,
        },
        tabBarActiveBackgroundColor: "#FF6C00",
        tabBarInactiveBackgroundColor: "#fff",
      })}
    >
      <Tab.Screen name="Posts" component={Profile} />
      <Tab.Screen name="CreatePost" component={CreatePost} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
