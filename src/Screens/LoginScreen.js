import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import imageBG from "../assets/images/photo.png";
import styled from "styled-components/native";

const ImageBack = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
`;

const RegisterField = styled.View`
  width: 100%;
  height: auto;
  background-color: white;
  border-radius: 25px 25px 0 0;
  padding: 32px 16px 111px 16px;
  position: absolute;
  bottom: 0;
  justify-content: flex-start;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 30px;
  font-family: "Roboto-Medium";
  margin-bottom: 32px;
  color: #212121;
`;

const InputArea = styled.View`
  gap: 16px;
`;

const InputItem = styled.View`
  min-width: 100%;
  height: 50px;
  padding: 16px;
  border: 1px solid #bdbdbd;
  border-radius: 8px;
  background-color: #f6f6f6;
  color: #bdbdbd;
  cursor: pointer;
`;

const ButtonItem = styled.View`
  width: 100%;
  height: auto;
  padding: 16px 32px;
  align-items: center;
  border-radius: 100px;
  background-color: inherit;
`;

const ButonText = styled.Text`
  color: #1b4371;
`;

export const Login = () => {
  const register = () => {
    console.debug("Welcome!");
  };

  const comeInYourPage = () => {
    console.debug("Welcome in your page!");
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
            <InputItem>
              <TextInput
                placeholder="Password"
                keyboardType="default"
                autoFocus
                autoComplete="password"
              />
            </InputItem>
          </InputArea>
          <View>
            <ButtonItem style={styles.isActive}>
              <TouchableOpacity style={styles.button} onPress={register}>
                <ButonText style={{ color: "white" }}>Sing-in</ButonText>
              </TouchableOpacity>
            </ButtonItem>
            <ButtonItem>
              <TouchableOpacity style={styles.button} onPress={comeInYourPage}>
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

const styles = StyleSheet.create({
  button: {
    width: "100%",
    cursor: "pointer",
    backgroundColor: "inherit",
    alignItems: "center",
  },
  isActive: {
    backgroundColor: "#FF6C00",
  },
  imageBtn: {
    color: "#FF6C00",
    cursor: "pointer",
    backgroundColor: "inherit",
    alignItems: "center",
  },
});
