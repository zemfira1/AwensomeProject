import React from "react";
import { View, TouchableWithoutFeedback, Keyboard } from "react-native";
import { styles } from "../RegistrationScreen/RegistrationScreenStyled";
import {
  AvatarArea,
  UserArea,
  Name,
  Email,
  UserIconArea,
} from "./PostsScreenStyled";
import UserIcon from "../../assets/images/usericon.svg";
import { SafeAreaProvider } from "react-native-safe-area-context";

const avatar = false;
const name = "Name Lastname";
const email = "login@gmail.com";

export const Posts = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaProvider style={styles.container}>
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
      </SafeAreaProvider>
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
