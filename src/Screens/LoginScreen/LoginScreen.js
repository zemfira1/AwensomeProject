import { TextInput, View, TouchableOpacity, Text } from "react-native";
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

export const Login = () => {
  const singIn = () => {
    console.debug("Welcome!");
  };

  const goToRegister = () => {
    console.debug("Welcome on register page!");
  };

  return (
    <ImageBack source={imageBG}>
      <RegisterField>
        <Title>Sing-in</Title>
        <View style={{ flex: 1, gap: 43 }}>
          <InputArea>
            <InputItem>
              <TextInput
                placeholder="Email"
                keyboardType="email-address"
                autoFocus
                autoComplete="email"
              />
            </InputItem>
            <InputItem style={styles.passwordInput}>
              <TextInput
                placeholder="Password"
                keyboardType="default"
                autoFocus
                autoComplete="password"
              />
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
                    Register
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
