import React, { useState } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import { initialState } from "../../initialState";
import {
  AddPostField,
  ImageArea,
  ImageBtnArea,
  styles,
  ImageText,
  InputArea,
  InputItem,
  ButtonItem,
  ButonText,
  TrashButton,
} from "./CreatePostStyled";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export const CreatePost = () => {
  const [postsListState, setPostsListState] = useState(initialState.posts);
  const [postState, setPostState] = useState(initialState.posts.post);
  const defaultColor = "#bdbdbd";
  const accentColor = "#FF6C00";
  const [nameBorderColor, setNameBorderColor] = useState(defaultColor);
  const [locationBorderColor, setLocationBorderColor] = useState(defaultColor);
  const [locationIconColor, setLocationIconColor] = useState(defaultColor);
  const { image, name, location } = postState;
  const { postsList } = postsListState;
  const navigation = useNavigation();

  const addPhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setPostState((pervstate) => ({
        ...pervstate,
        image: result.assets[0].uri,
      }));
    }
  };

  const setName = (name) => {
    setPostState((pervstate) => ({
      ...pervstate,
      name: name,
    }));
  };

  const setLocation = (location) => {
    setPostState((pervstate) => ({
      ...pervstate,
      location: location,
    }));
  };

  const openMap = () => {
    console.log("choose your location...");
  };

  const publish = () => {
    const newPost = {
      image: image,
      name: name,
      location: location,
    };

    setPostsListState((pervstate) => ({
      ...pervstate,
      postsList: [...postsList, newPost],
    }));

    console.log(postsListState);

    reset();
    navigation.navigate("Login"); //Login времнно, т.к. Posts выдает ошибку аватара
  };

  const reset = () => {
    setPostState((pervstate) => ({
      ...pervstate,
      image: "",
      name: "",
      location: "",
    }));
    console.log(postState);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <AddPostField>
          {image ? (
            <ImageArea>
              <Image source={{ uri: image }} style={styles.image} />
              <TouchableOpacity onPress={addPhoto} style={styles.btnPosition}>
                <ImageBtnArea style={styles.btnWithPhoto}>
                  <Ionicons name={"camera"} size={24} color={"#FFFFFF"} />
                </ImageBtnArea>
              </TouchableOpacity>
              <ImageText>Update photo</ImageText>
            </ImageArea>
          ) : (
            <ImageArea>
              <TouchableOpacity onPress={addPhoto} style={styles.btnPosition}>
                <ImageBtnArea style={styles.btnWithoutPhoto}>
                  <Ionicons name={"camera"} size={24} color={"#BDBDBD"} />
                </ImageBtnArea>
              </TouchableOpacity>
              <ImageText>Add photo</ImageText>
            </ImageArea>
          )}
          <InputArea>
            <InputItem style={{ borderColor: nameBorderColor }}>
              <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
              >
                <TextInput
                  style={styles.inputPlaceholder}
                  placeholder="Name..."
                  keyboardType="default"
                  value={name}
                  onChangeText={setName}
                  onFocus={() => setNameBorderColor(accentColor)}
                  onBlur={() => setNameBorderColor(defaultColor)}
                />
              </KeyboardAvoidingView>
            </InputItem>
            <InputItem style={{ borderColor: locationBorderColor }}>
              <KeyboardAvoidingView
                style={styles.locationRow}
                behavior={Platform.OS == "ios" ? "padding" : "height"}
              >
                <TouchableOpacity onPress={openMap} style={{}}>
                  <View>
                    <Fontisto
                      name="map-marker-alt"
                      size={20}
                      color="#BDBDBD"
                      onFocus={() => setLocationIconColor(accentColor)}
                      onBlur={() => setLocationIconColor(defaultColor)}
                    />
                  </View>
                </TouchableOpacity>
                <TextInput
                  style={styles.inputPlaceholder}
                  placeholder="Location..."
                  keyboardType="default"
                  value={location}
                  onChangeText={setLocation}
                  onFocus={() => setLocationBorderColor(accentColor)}
                  onBlur={() => setLocationBorderColor(defaultColor)}
                />
              </KeyboardAvoidingView>
            </InputItem>
          </InputArea>
          <TouchableOpacity style={styles.button} onPress={publish}>
            <ButtonItem
            // style={{
            //   backgroundColor: image && name && location && "#FF6C00",
            // }}
            >
              <ButonText
              // style={{
              //   color: image && name && location && "#FFFFFF",
              // }}
              >
                Pablish
              </ButonText>
            </ButtonItem>
          </TouchableOpacity>
        </AddPostField>
        <TouchableOpacity style={{ alignItems: "center" }} onPress={reset}>
          <TrashButton>
            <Feather name="trash-2" size={24} color="#BDBDBD" />
          </TrashButton>
        </TouchableOpacity>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};
