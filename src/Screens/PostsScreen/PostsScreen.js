import { useRoute } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { styles } from "../RegistrationScreen/RegistrationScreenStyled";
import {
  AvatarArea,
  UserArea,
  Name,
  Email,
  UserIconArea,
} from "./PostsScreenStyled";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CreatePost } from "../CreatePostsScreen/CreatePostsScreen";
import { Profile } from "../ProfileScreen/ProfileScreen";
import { Ionicons } from "@expo/vector-icons";
import UserIcon from "../../assets/images/usericon.svg";

const Tab = createBottomTabNavigator();

export const Posts = () => {
  // const navigation = useNavigation();
  const {
    params: { avatar, name, email },
  } = useRoute();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <UserArea>
          {avatar ? (
            <AvatarArea source={{ uri: avatar }} />
          ) : (
            <UserIconArea>
              <UserIcon width={60} height={60} />
            </UserIconArea>
          )}
          <View>
            {name && <Name>{name}</Name>}
            {email && <Email>{email}</Email>}
          </View>
        </UserArea>
        {/* <MyTabs /> */}
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
          <Tab.Screen name="Posts" component={CreatePost} />
          <Tab.Screen name="CreatePost" component={CreatePost} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

// const MyTabs = () => {
//   return (
//     <Tab.Navigator
//       // initialRouteName="Posts"
//       screenOptions={{
//         tabBarInactiveTintColor: "#bdbdbd",
//         tabBarActiveTintColor: "#fff",
//         tabBarItemStyle: {
//           position: "absolute",
//           borderRadius: 20,
//           width: 70,
//           height: 40,
//           marginBottom: 22,
//         },
//         tabBarActiveBackgroundColor: "#FF6C00",
//         tabBarInactiveBackgroundColor: "#fff",
//       }}
//     >
//       <Tab.Screen
//         name="Posts"
//         component={Profile}
//         options={{
//           tabBarIcon: ({ color }) => (
//             <Ionicons name="md-grid-outline" size={24} color={color} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="CreatePost"
//         component={CreatePost}
//         options={{
//           tabBarIcon: ({ color }) => (
//             <Ionicons name="add" size={13} color={color} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={Profile}
//         options={{
//           tabBarIcon: ({ color }) => (
//             <Ionicons name="person-outline" size={24} color={color} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };
