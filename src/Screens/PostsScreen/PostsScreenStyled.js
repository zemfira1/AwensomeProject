import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const UserArea = styled.View`
  margin-bottom: 32px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  position: absolute;
  top: 32px;
  left: 16px;
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingLeft: 16,
    paddingRight: 16,
  },
  navigation: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 60,
  },
});
