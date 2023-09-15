import {
  TextInput,
  View,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
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
import { initialState } from "../../initialState";
import { useNavigation } from "@react-navigation/native";

export const Registration = () => {
  const [dataUserState, setDataUserState] = useState(initialState);
  const [isShow, setIsShow] = useState(false);
  const navigation = useNavigation();

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

  const setLogin = (login) => {
    setDataUserState((pervstate) => ({
      ...pervstate,
      login: login,
    }));
  };
  const setEmail = (email) => {
    setDataUserState((pervstate) => ({
      ...pervstate,
      email: email,
    }));
  };
  const setPassword = (password) => {
    setDataUserState((pervstate) => ({
      ...pervstate,
      password: password,
    }));
  };

  const register = () => {
    const newUser = {
      login: dataUserState.login,
      email: dataUserState.email,
      password: dataUserState.password,
    };

    console.log(newUser);
    reset();
  };

  const comeInYourPage = () => {
    navigation.navigate("Login");
  };

  const reset = () => {
    setDataUserState((pervstate) => ({
      ...pervstate,
      login: "",
      email: "",
      password: "",
    }));
  };

  const { avatar, login, email, password } = dataUserState;

  return (
    <ImageBack source={imageBG}>
      <RegisterField>
        {avatar ? (
          <PhotoArea>
            <Image source={{ uri: avatar }} style={styles.avatar} />
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
              <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
              >
                <TextInput
                  placeholder="Login"
                  keyboardType="default"
                  value={login}
                  onChangeText={setLogin}
                />
              </KeyboardAvoidingView>
            </InputItem>
            <InputItem>
              <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
              >
                <TextInput
                  placeholder="Email"
                  keyboardType="email-address"
                  autoComplete="email"
                  value={email}
                  onChangeText={setEmail}
                />
              </KeyboardAvoidingView>
            </InputItem>
            <InputItem style={styles.passwordInput}>
              <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
              >
                <TextInput
                  placeholder="Password"
                  keyboardType="default"
                  autoComplete="password"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!isShow ? true : false}
                />
              </KeyboardAvoidingView>
              {!isShow ? (
                <TouchableOpacity
                  style={styles.showButton}
                  onPress={() => setIsShow(true)}
                >
                  <ButonText>Show</ButonText>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.showButton}
                  onPress={() => setIsShow(false)}
                >
                  <ButonText>Hide</ButonText>
                </TouchableOpacity>
              )}
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
