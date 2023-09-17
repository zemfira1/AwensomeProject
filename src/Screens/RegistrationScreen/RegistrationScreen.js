import {
  TextInput,
  View,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
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
  const [dataUserState, setDataUserState] = useState(initialState.user);
  const [isShow, setIsShow] = useState(false);
  const navigation = useNavigation();
  const defaultBorderColor = "#BDBDBD";
  const accentBorderColor = "#FF6C00";
  const [loginBorderColor, setLoginBorderColor] = useState(defaultBorderColor);
  const [emailBorderColor, setEmailBorderColor] = useState(defaultBorderColor);
  const [passBorderColor, setPassBorderColor] = useState(defaultBorderColor);

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

    navigation.navigate("Home");

    console.log(newUser);

    console.log(dataUserState);
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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <ImageBack source={imageBG}>
          <RegisterField>
            {avatar ? (
              <PhotoArea>
                <Image source={{ uri: avatar }} style={styles.avatar} />
                <TouchableOpacity onPress={deletePhoto} style={styles.touch}>
                  <ImageBtnArea
                    style={[styles.imageBtn, { borderColor: "#BDBDBD" }]}
                  >
                    <DeleteIcon width={13} height={13} />
                  </ImageBtnArea>
                </TouchableOpacity>
              </PhotoArea>
            ) : (
              <PhotoArea>
                <TouchableOpacity onPress={addPhoto} style={styles.touch}>
                  <ImageBtnArea
                    style={[styles.imageBtn, { borderColor: "#ff6c00" }]}
                  >
                    <AddIcon width={13} height={13} />
                  </ImageBtnArea>
                </TouchableOpacity>
              </PhotoArea>
            )}
            <Title>Registration</Title>
            <View style={{ flex: 1, gap: 43 }}>
              <InputArea>
                <InputItem style={{ borderColor: loginBorderColor }}>
                  <KeyboardAvoidingView
                    behavior={Platform.OS == "ios" ? "padding" : "height"}
                  >
                    <TextInput
                      placeholder="Login"
                      keyboardType="default"
                      value={login}
                      onChangeText={setLogin}
                      onFocus={() => setLoginBorderColor(accentBorderColor)}
                      onBlur={() => setLoginBorderColor(defaultBorderColor)}
                    />
                  </KeyboardAvoidingView>
                </InputItem>
                <InputItem style={{ borderColor: emailBorderColor }}>
                  <KeyboardAvoidingView
                    behavior={Platform.OS == "ios" ? "padding" : "height"}
                  >
                    <TextInput
                      placeholder="Email"
                      keyboardType="email-address"
                      autoComplete="email"
                      value={email}
                      onChangeText={setEmail}
                      onFocus={() => setEmailBorderColor(accentBorderColor)}
                      onBlur={() => setEmailBorderColor(defaultBorderColor)}
                    />
                  </KeyboardAvoidingView>
                </InputItem>
                <InputItem
                  style={[
                    styles.passwordInput,
                    { borderColor: passBorderColor },
                  ]}
                >
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
                      onFocus={() => setPassBorderColor(accentBorderColor)}
                      onBlur={() => setPassBorderColor(defaultBorderColor)}
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
                <TouchableOpacity style={styles.button} onPress={register}>
                  <ButtonItem style={styles.isActive}>
                    <ButonText style={{ color: "white" }}>Register</ButonText>
                  </ButtonItem>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={comeInYourPage}
                >
                  <ButtonItem>
                    <ButonText>Already have an account? To come in</ButonText>
                  </ButtonItem>
                </TouchableOpacity>
              </View>
            </View>
          </RegisterField>
        </ImageBack>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};
