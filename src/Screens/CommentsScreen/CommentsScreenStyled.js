import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const CommentsField = styled.View`
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 32px 16px 16px 16px;
  align-items: center;
`;

export const ImageArea = styled.View`
  width: 100%;
  height: 240px;
  border-radius: 8px;
  background-color: #bdbdbd;
  margin-bottom: 8px;
`;

export const CommentsEl = styled.View`
  width: 100%;
`;

export const InputItem = styled.View`
  width: 100%;
  height: 50px;
  padding: 16px;
  border: 1px solid #e8e8e8;
  border-radius: 100px;
  background-color: #f6f6f6;
  color: #bdbdbd;
  position: absolute;
  bottom: 16px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const BtnField = styled.View`
  width: 34px;
  height: 34px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  background-color: #ff6c00;
`;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageItem: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  textSize: {
    fontSize: 16,
  },
});
