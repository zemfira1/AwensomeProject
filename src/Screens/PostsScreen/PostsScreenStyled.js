import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const UserArea = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  position: absolute;
  left: 16px;
  top: 32px;
`;

export const AvatarArea = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 16px;
`;

export const Name = styled.Text`
  font-family: "Roboto-Bold";
  font-size: 13px;
`;

export const Email = styled.Text`
  font-size: 11px;
`;

export const UserIconArea = styled.View`
  border-radius: 16px;
  border: 1px solid #bdbdbd;
`;

export const ListArea = styled.View`
  width: 100%;
`;

export const ImageArea = styled.View`
  width: 100%;
  height: 240px;
  border-radius: 8px;
  background-color: #bdbdbd;
  margin-bottom: 8px;
`;

export const Title = styled.Text`
  font-size: "Roboto-Medium";
  font-size: 16px;
  margin-bottom: 8px;
`;

export const Information = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 32px;
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingLeft: 16,
    paddingRight: 16,
  },
  imageItem: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
});
