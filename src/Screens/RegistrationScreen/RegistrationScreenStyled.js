import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const ImageBack = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const RegisterField = styled.View`
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

export const ImageBtnArea = styled.View`
  width: 25px;
  height: 25px;
  border-radius: 25px;
  border: 1px solid;
  background-color: white;

  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-family: "Roboto-Medium";
  margin-bottom: 32px;
  color: #212121;
`;

export const PhotoArea = styled.View`
  width: 120px;
  height: 120px;
  border-radius: 16px;
  background-color: #f6f6f6;
  position: absolute;
  top: -60px;
`;

export const InputArea = styled.View`
  gap: 16px;
`;

export const InputItem = styled.View`
  min-width: 100%;
  height: 50px;
  padding: 16px;
  border: 1px solid #bdbdbd;
  border-radius: 8px;
  background-color: #f6f6f6;
  color: #bdbdbd;
`;

export const ButtonItem = styled.View`
  width: 100%;
  height: auto;
  padding: 16px 32px;
  align-items: center;
  border-radius: 100px;
  background-color: inherit;
`;

export const ButonText = styled.Text`
  color: #1b4371;
  font-size: 16px;
`;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  button: {
    width: "100%",
    backgroundColor: "inherit",
    alignItems: "center",
  },
  isActive: {
    backgroundColor: "#FF6C00",
  },
  imageBtn: {
    color: "#FF6C00",
    backgroundColor: "inherit",
  },
  passwordInput: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  showButton: {
    padding: 0,
    width: "auto",
    backgroundColor: "inherit",
    position: "absolute",
    right: 16,
  },
  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
  },
  touch: {
    position: "absolute",
    bottom: 14,
    right: -12,
  },
});
