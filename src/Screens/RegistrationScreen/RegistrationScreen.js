import { TextInput, View, TouchableOpacity, Image } from "react-native";
import imageBG from "../../assets/images/photo.png";
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
} from "./RegistrationScreenStyled.js";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

const initialState = {
  login: "",
  email: "",
  password: "",
  avatar: "",
};

export const Registration = () => {
  const [dataUserState, setDataUserState] = useState(initialState);

  const addPhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setDataUserState((pervstate) => ({
        ...pervstate,
        avatar: result.assets[0].uri,
      }));
    }
  };

  const deletePhoto = () => {
    setDataUserState((pervstate) => ({
      ...pervstate,
      avatar: "",
    }));
  };

  const register = () => {
    console.debug("Welcome!");
  };

  const comeInYourPage = () => {
    console.debug("Welcome on your page!");
  };

  return (
    <ImageBack source={imageBG}>
      <RegisterField>
        {dataUserState.avatar ? (
          <PhotoArea>
            <View style={{ overflow: "hidden" }}>
              <Image
                source={{ uri: dataUserState.avatar }}
                style={styles.avatar}
              />
            </View>
            <ImageBtnArea style={[styles.imageBtn, { borderColor: "#BDBDBD" }]}>
              <TouchableOpacity onPress={deletePhoto}>
                <View>
                  <DeleteIcon width={13} height={13} />
                </View>
              </TouchableOpacity>
            </ImageBtnArea>
          </PhotoArea>
        ) : (
          <PhotoArea>
            <ImageBtnArea style={[styles.imageBtn, { borderColor: "#ff6c00" }]}>
              <TouchableOpacity onPress={addPhoto}>
                <View>
                  <AddIcon width={13} height={13} />
                </View>
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
