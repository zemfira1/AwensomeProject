import {
  TextInput,
  View,
  TouchableOpacity,
  Text,
  Button,
  Image,
} from "react-native";
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
  Show,
  Title,
  styles,
} from "./RegistrationScreenStyled.js";
import avatar from "../../assets/images/Avatar.png";

export const Registration = () => {
  const addPhoto = () => {
    console.debug("You added photo!");
  };

  const deletePhoto = () => {
    console.debug("You deleteded photo!");
  };

  const register = () => {
    console.debug("Welcome!");
  };

  const comeInYourPage = () => {
    console.debug("Welcome on your page!");
  };

  const isPhoto = true; // временный флажок

  return (
    <ImageBack source={imageBG}>
      <RegisterField>
        {isPhoto ? (
          <PhotoArea>
            <Image source={avatar} />
            <ImageBtnArea style={{ borderColor: "#BDBDBD" }}>
              <TouchableOpacity style={styles.imageBtn} onPress={deletePhoto}>
                <DeleteIcon width={13} height={13} />
              </TouchableOpacity>
            </ImageBtnArea>
          </PhotoArea>
        ) : (
          <PhotoArea>
            <ImageBtnArea style={{ borderColor: "#ff6c00" }}>
              <TouchableOpacity style={styles.imageBtn} onPress={addPhoto}>
                <AddIcon width={13} height={13} />
              </TouchableOpacity>
            </ImageBtnArea>
          </PhotoArea>
        )}

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
            <InputItem style={styles.passwordInput}>
              <TextInput
                placeholder="Password"
                keyboardType="default"
                autoFocus
                autoComplete="password"
              />
              <TouchableOpacity style={styles.showButton}>
                <ButonText>Show</ButonText>
              </TouchableOpacity>
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
