import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { Registration } from "./src/Screens/RegistrationScreen/RegistrationScreen";
import { Login } from "./src/Screens/LoginScreen/LoginScreen";
import { PostsScreen } from "./src/Screens/PostsScreen/PostsScreen";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";

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
      <MainStack.Navigator initialRouteName="Login">
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
        <MainStack.Screen name="PostsScreen" component={PostsScreen} />
      </MainStack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
