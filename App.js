import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { Registration } from "./src/Screens/RegistrationScreen/RegistrationScreen";
import { Login } from "./src/Screens/LoginScreen/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import { Home } from "./src/Screens/HomeScreen/Home";

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
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        {/* 
        <MainStack.Screen
          name="Comments"
          component={Comments}
          options={{
            title: "Comments",
            headerStyle: styles.headerStyle,
            headerTintColor: "#212121",
            headerTitleStyle: styles.headerTitleStyle,
            headerTitleAlign: "center",
          }}
        /> */}
      </MainStack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
