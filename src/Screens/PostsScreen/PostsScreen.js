import { useRoute } from "@react-navigation/native";
import React, { useState } from "react";
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

import UserIcon from "../../assets/images/usericon.svg";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { MyTabs } from "../HomeScreen/Home";
import { initialState } from "../../initialState";

export const Posts = () => {
  // const navigation = useNavigation();
  const [dataUserState, setDataUserState] = useState(initialState.user);
  const { avatar, name, email } = dataUserState;
  //  const {
  //    params: { avatar, name, email },
  //  } = useRoute();

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
        <MyTabs />
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
