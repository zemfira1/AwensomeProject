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
  margin-bottom: 32px;
`;

export const CommentEl = styled.View`
  min-width: 100%;
  flex-direction: row;
  gap: 16px;
  margin-bottom: 24px;
`;

export const Avatar = styled.View`
  width: 28px;
  height: 28px;
  border-radius: 15px;
  background-color: #bdbdbd;
  justify-content: center;
  align-items: center;
`;

export const TextArea = styled.View`
  width: 87%;
  padding: 16px;
  background-color: rgba(0, 0, 0, 0.03);
  border-radius: 8px;
  border-top-left-radius: 0;
`;

export const TextEl = styled.Text`
  font-size: 13px;
  color: #212121;
  margin-bottom: 8px;
`;

export const DataEl = styled.Text`
  font-size: 10px;
  color: #bdbdbd;
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

  rightAvatat: {
    position: "absolute",
    right: 0,
  },
  rightTextArea: {
    borderTopRightRadius: 0,
    borderTopLeftRadius: 8,
  },
});
