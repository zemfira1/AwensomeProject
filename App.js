import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { Registration } from "./src/Screens/RegistrationScreen/RegistrationScreen";
import { Login } from "./src/Screens/LoginScreen/LoginScreen";
import { Posts } from "./src/Screens/PostsScreen/PostsScreen";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import LogOutIcon from "./src/assets/images/logout.svg";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Profile } from "./src/Screens/ProfileScreen/ProfileScreen";
import { Comments } from "./src/Screens/CommentsScreen/CommentsScreen";
import { CreatePost } from "./src/Screens/CreatePostsScreen/CreatePostsScreen";

const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./src/assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./src/assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Registration">
        <MainStack.Screen
          name="Registration"
          component={Registration}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Posts"
          component={Posts}
          options={{
            title: "Posts",
            headerStyle: styles.headerStyle,
            headerTintColor: "#212121",
            headerTitleStyle: styles.headerTitleStyle,
            headerRight: () => (
              <TouchableOpacity
                style={styles.logOut}
                onPress={() => console.debug("LogOut")}
              >
                <LogOutIcon width={24} height={24} />
              </TouchableOpacity>
            ),
          }}
          n
        />
        <MainStack.Screen
          name="CreatePost"
          component={CreatePost}
          options={{
            title: "Create post",
            headerStyle: styles.headerStyle,
            headerTintColor: "#212121",
            headerTitleStyle: styles.headerTitleStyle,
          }}
        />
        <MainStack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Comments"
          component={Comments}
          options={{
            title: "Comments",
            headerStyle: styles.headerStyle,
            headerTintColor: "#212121",
            headerTitleStyle: styles.headerTitleStyle,
          }}
        />
      </MainStack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  logOut: {
    marginRight: 10,
    backgroundColor: "inherit",
  },
  headerStyle: {
    height: 88,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#BDBDBD",
    shadowColor: "rgba(0, 0, 0, 0.3)",
  },
  headerTitleStyle: {
    fontFamily: "Roboto-Medium",
    fontSize: 17,
  },
});
