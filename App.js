import { StatusBar } from "expo-status-bar";
import {
  Keyboard,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { useFonts } from "expo-font";
import { Registration } from "./src/Screens/RegistrationScreen/RegistrationScreen";
import { Login } from "./src/Screens/LoginScreen/LoginScreen";
import { Home } from "./src/Screens/Home/Home";
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
    // <SafeAreaView style={styles.container}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <NavigationContainer>
        <MainStack.Navigator initialRouteName="Registration">
          <MainStack.Screen name="Registration" component={Registration} />
          <MainStack.Screen name="Login" component={Login} />
          <MainStack.Screen name="Home" component={Home} />
        </MainStack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </TouchableWithoutFeedback>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
});
