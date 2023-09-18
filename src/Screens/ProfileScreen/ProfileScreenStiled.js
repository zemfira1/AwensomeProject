import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const ImageBack = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const RegisterField = styled.View`
  width: 100%;
  height: 85%;
  background-color: white;
  border-radius: 25px 25px 0 0;
  padding: 92px 16px 45px 16px;
  position: absolute;
  bottom: 0;
  justify-content: flex-start;
  align-items: center;
`;

export const PhotoArea = styled.View`
  width: 120px;
  height: 120px;
  border-radius: 16px;
  background-color: #f6f6f6;
  position: absolute;
  top: -60px;
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

export const ListArea = styled.View`
  min-width: 100%;
`;

export const ImageArea = styled.View`
  width: 100%;
  height: 240px;
  border-radius: 8px;
  background-color: #bdbdbd;
  margin-bottom: 8px;
`;

export const Information = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 32px;
`;

export const CommLikes = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  gap: 24px;
`;

export const InfoPart = styled.View`
  flex-direction: row;
  gap: 6px;
  align-items: baseline;
`;

export const InfoText = styled.Text`
  color: #212121;
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
  imageBtn: {
    color: "#FF6C00",
    backgroundColor: "inherit",
  },
  logOut: {
    marginRight: 10,
    backgroundColor: "inherit",
    position: "absolute",
    top: 22,
    right: 16,
  },
  imageItem: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
});
