import {
  TextInput,
  View,
  TouchableOpacity,
  Text,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import imageBG from "../../assets/images/photo.png";
import {
  ButonText,
  ButtonItem,
  ImageBack,
  InputArea,
  InputItem,
  RegisterField,
  Title,
  styles,
} from "./LoginScreenStyled.js";
import { useState } from "react";
import { initialState } from "../../initialState";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export const Login = () => {
  const [dataUserState, setDataUserState] = useState(initialState);
  const [isShow, setIsShow] = useState(false);
  const navigation = useNavigation();

  const setEmail = (email) => {
    setDataUserState((pervstate) => ({
      ...pervstate,
      email: email,
    }));
  };

  const setPassword = (password) => {
    setDataUserState((pervstate) => ({
      ...pervstate,
      password: password,
    }));
  };

  const singIn = () => {
    const currentUser = {
      email: dataUserState.email,
      password: dataUserState.password,
    };

    navigation.navigate("PostsScreen");

    console.log(currentUser);
    reset();
  };

  const reset = () => {
    setDataUserState((pervstate) => ({
      ...pervstate,
      email: "",
      password: "",
    }));
  };

  const goToRegister = () => {
    navigation.navigate("Registration");
  };

  const { email, password } = dataUserState;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <ImageBack source={imageBG}>
          <RegisterField>
            <Title>Sing-in</Title>
            <View style={{ flex: 1, gap: 43 }}>
              <InputArea>
                <InputItem>
                  <KeyboardAvoidingView
                    behavior={Platform.OS == "ios" ? "padding" : "height"}
                  >
                    <TextInput
                      placeholder="Email"
                      keyboardType="email-address"
                      autoComplete="email"
                      value={email}
                      onChangeText={setEmail}
                    />
                  </KeyboardAvoidingView>
                </InputItem>
                <InputItem style={styles.passwordInput}>
                  <KeyboardAvoidingView
                    behavior={Platform.OS == "ios" ? "padding" : "height"}
                  >
                    <TextInput
                      placeholder="Password"
                      keyboardType="default"
                      autoComplete="password"
                      value={password}
                      onChangeText={setPassword}
                      secureTextEntry={!isShow ? true : false}
                    />
                  </KeyboardAvoidingView>
                  {!isShow ? (
                    <TouchableOpacity
                      style={styles.showButton}
                      onPress={() => setIsShow(true)}
                    >
                      <ButonText>Show</ButonText>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      style={styles.showButton}
                      onPress={() => setIsShow(false)}
                    >
                      <ButonText>Hide</ButonText>
                    </TouchableOpacity>
                  )}
                </InputItem>
              </InputArea>
              <View>
                <ButtonItem style={styles.isActive}>
                  <TouchableOpacity style={styles.button} onPress={singIn}>
                    <ButonText style={{ color: "white" }}>Sing-in</ButonText>
                  </TouchableOpacity>
                </ButtonItem>
                <ButtonItem>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={goToRegister}
                  >
                    <ButonText>
                      Don't have an account?
                      <Text style={{ textDecorationLine: "underline" }}>
                        &nbsp;Register
                      </Text>
                    </ButonText>
                  </TouchableOpacity>
                </ButtonItem>
              </View>
            </View>
          </RegisterField>
        </ImageBack>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};
