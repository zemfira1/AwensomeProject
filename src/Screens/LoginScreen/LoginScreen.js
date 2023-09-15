import {
  TextInput,
  View,
  TouchableOpacity,
  Text,
  Platform,
  KeyboardAvoidingView,
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

export const Login = () => {
  const [dataUserState, setDataUserState] = useState(initialState);

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
    console.debug("Welcome on register page!");
  };

  const { email, password } = dataUserState;

  return (
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
                />
              </KeyboardAvoidingView>
              <TouchableOpacity style={styles.showButton}>
                <ButonText>Show</ButonText>
              </TouchableOpacity>
            </InputItem>
          </InputArea>
          <View>
            <ButtonItem style={styles.isActive}>
              <TouchableOpacity style={styles.button} onPress={singIn}>
                <ButonText style={{ color: "white" }}>Sing-in</ButonText>
              </TouchableOpacity>
            </ButtonItem>
            <ButtonItem>
              <TouchableOpacity style={styles.button} onPress={goToRegister}>
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
  );
};
