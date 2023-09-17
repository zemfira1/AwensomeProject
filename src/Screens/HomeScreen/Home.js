import React from "react";
import { TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CreatePost } from "../CreatePostsScreen/CreatePostsScreen";
import { Profile } from "../ProfileScreen/ProfileScreen";
import { Ionicons } from "@expo/vector-icons";
import { Posts } from "../PostsScreen/PostsScreen";
import { styles } from "../RegistrationScreen/RegistrationScreenStyled";
import LogOutIcon from "../../assets/images/logout.svg";

const Tab = createBottomTabNavigator();

export const Home = () => {
  return (
    <Tab.Navigator
      initialRouteName="Posts"
      //   sceneContainerStyle={{
      //     height: 88,
      //   }}
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
          borderRadius: 20,
          width: 70,
          height: 40,
          marginBottom: 22,
        },
        tabBarActiveBackgroundColor: "#FF6C00",
        tabBarInactiveBackgroundColor: "#fff",
      })}
    >
      <Tab.Screen
        name="Posts"
        component={Posts}
        options={{
          title: "Posts",
          headerStyle: styles.headerStyle,
          headerTintColor: "#212121",
          headerTitleStyle: styles.headerTitleStyle,
          headerTitleAlign: "center",
          headerRight: () => (
            <TouchableOpacity
              style={styles.logOut}
              onPress={() => console.debug("LogOut")}
            >
              <LogOutIcon width={24} height={24} />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="CreatePost"
        component={CreatePost}
        options={{
          title: "Create post",
          headerStyle: styles.headerStyle,
          headerTintColor: "#212121",
          headerTitleStyle: styles.headerTitleStyle,
          headerTitleAlign: "center",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};
