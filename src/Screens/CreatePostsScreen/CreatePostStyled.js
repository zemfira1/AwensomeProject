import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const AddPostField = styled.View`
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 32px 16px 0 16px;
  justify-content: flex-start;
  align-items: center;
`;

export const ImageArea = styled.View`
  width: 100%;
  height: 240px;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  background-color: #f6f6f6;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
`;

export const ImageBtnArea = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  border: none;
  justify-content: center;
  align-items: center;
`;

export const ImageText = styled.Text`
  position: absolute;
  bottom: -28px;
  left: 0;
  color: #bdbdbd;
  font-size: 16px;
`;

export const InputArea = styled.View`
  gap: 16px;
  margin-bottom: 32px;
`;

export const InputItem = styled.View`
  min-width: 100%;
  height: 50px;
  padding: 16px 0 16px 0;
  border-bottom: 1px solid red;
  border-top: none;
  border-right: none;
  border-left: none;
  /* border-bottom-color: #bdbdbd; 
  border-top-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;*/
  background-color: inherit;
  color: #bdbdbd;
  font-size: 16px;
`;

export const ButtonItem = styled.View`
  width: 100%;
  height: auto;
  padding: 16px 32px;
  align-items: center;
  border-radius: 100px;
  background-color: #f6f6f6;
`;

export const ButonText = styled.Text`
  color: #bdbdbd;
  font-size: 16px;
`;

export const TrashButton = styled.View`
  width: 70px;
  height: 40px;
  padding: 8px 23px;
  align-items: center;
  border-radius: 20px;
  background-color: #f6f6f6;
  position: absolute;
  bottom: 20px;
`;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  btnWithoutPhoto: {
    backgroundColor: "white",
  },
  btnWithPhoto: {
    backgroundColor: "rgba(225, 225, 225, 0.3)",
  },
  btnPosition: {
    position: "absolute",
  },
  inputPlaceholder: {
    fontSize: 16,
  },
  locationRow: {
    flexDirection: "row",
    gap: 8,
    alignItems: "baseline",
  },
  button: {
    width: "100%",
    backgroundColor: "inherit",
    alignItems: "center",
  },
});
