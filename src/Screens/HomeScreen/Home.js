import React from "react";
import { TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CreatePost } from "../CreatePostsScreen/CreatePostsScreen";
import { Profile } from "../ProfileScreen/ProfileScreen";
import { Ionicons } from "@expo/vector-icons";
import { Posts } from "../PostsScreen/PostsScreen";
import { styles } from "../RegistrationScreen/RegistrationScreenStyled";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export const Home = () => {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      initialRouteName="Posts"
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarStyle: { display: route.name === "CreatePost" ? "none" : "flex" },
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
              <MaterialIcons name="logout" size={24} color="#BDBDBD" />
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
          headerLeft: () => (
            <TouchableOpacity
              style={styles.arrow}
              onPress={() => navigation.navigate("Posts")}
            >
              <AntDesign name="arrowleft" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          ),
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
