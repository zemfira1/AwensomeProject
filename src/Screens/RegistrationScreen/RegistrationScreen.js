import { TextInput, View, TouchableOpacity } from "react-native";
import imageBG from "../../assets/images/photo.png";
//import ImageSVG from "../assets/images/backgroundsvg.svg";
import AddIcon from "../../assets/images/addicon.svg";
import DeleteIcon from "../../assets/images/deleteicon.svg";
import {
  ButonText,
  ButtonItem,
  ImageBack,
  ImageBtnArea,
  InputArea,
  InputItem,
  PhotoArea,
  RegisterField,
  Title,
  styles,
} from "./RegistrationScreenStyled";

export const Registration = () => {
  const addphoto = () => {
    console.debug("You added photo!");
  };

  const register = () => {
    console.debug("Welcome!");
  };

  const comeInYourPage = () => {
    console.debug("Welcome on your page!");
  };

  const isPhoto = false; // временный флажок

  return (
    <ImageBack source={imageBG}>
      <RegisterField>
        <PhotoArea>
          <ImageBtnArea
            style={{ borderColor: isPhoto ? "#BDBDBD" : "#ff6c00" }}
          >
            <TouchableOpacity style={styles.imageBtn} onPress={addphoto}>
              {isPhoto ? (
                <DeleteIcon width={13} height={13} />
              ) : (
                <AddIcon width={13} height={13} />
              )}
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
          <View>
            <ButtonItem style={styles.isActive}>
              <TouchableOpacity style={styles.button} onPress={register}>
                <ButonText style={{ color: "white" }}>Register</ButonText>
              </TouchableOpacity>
            </ButtonItem>
            <ButtonItem>
              <TouchableOpacity style={styles.button} onPress={comeInYourPage}>
                <ButonText>Already have an account? To come in</ButonText>
              </TouchableOpacity>
            </ButtonItem>
          </View>
        </View>
      </RegisterField>
    </ImageBack>
  );
};
