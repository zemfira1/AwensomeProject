import { TextInput, View, StyleSheet, TouchableOpacity } from "react-native";
import imageBG from "../assets/images/photo.png";
//import ImageSVG from "../assets/images/backgroundsvg.svg";
import styled from "styled-components/native";
import AddIcon from "../assets/images/addicon.svg";

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
  padding: 92px 16px 45px 16px;
  position: absolute;
  bottom: 0;
  justify-content: flex-start;
  align-items: center;
`;

const ImageBtnArea = styled.View`
  width: 25px;
  height: 25px;
  border-radius: 25px;
  border: 1px solid #ff6c00;
  background-color: white;
  position: absolute;
  bottom: 14px;
  right: -12px;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 30px;
  font-family: "Roboto-Medium";
  margin-bottom: 32px;
`;

const PhotoArea = styled.View`
  width: 120px;
  height: 120px;
  border-radius: 16px;
  background-color: #f6f6f6;
  position: absolute;
  top: -60px;
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

const ButtonArea = styled.View``;

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

export const Registration = () => {
  const addphoto = () => {
    console.debug("You added photo!");
  };

  const register = () => {
    console.debug("Welcome!");
  };

  const comeInYourPage = () => {
    console.debug("Welcome in your page!");
  };

  return (
    <ImageBack source={imageBG}>
      <RegisterField>
        <PhotoArea>
          <ImageBtnArea>
            <TouchableOpacity style={styles.imageBtn} onPress={addphoto}>
              <AddIcon width={13} height={13} />
            </TouchableOpacity>
          </ImageBtnArea>
        </PhotoArea>
        <Title>Registration</Title>
        <View style={{ flex: 1, gap: 43 }}>
          <InputArea>
            <InputItem>
              <TextInput placeholder="Login" keyboardType="default" autoFocus />
            </InputItem>
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
          <ButtonArea>
            <ButtonItem style={styles.isActive}>
              <TouchableOpacity style={styles.button} onPress={register}>
                <ButonText>Register</ButonText>
              </TouchableOpacity>
            </ButtonItem>
            <ButtonItem>
              <TouchableOpacity style={styles.button} onPress={comeInYourPage}>
                <ButonText>Already have an account? To come in</ButonText>
              </TouchableOpacity>
            </ButtonItem>
          </ButtonArea>
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
