import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  SafeAreaView,
  Keyboard,
  Image,
} from "react-native";
import { initialState } from "../../initialState";
import { FlatList } from "react-native-gesture-handler";
import {
  styles,
  ImageBack,
  ImageBtnArea,
  PhotoArea,
  RegisterField,
  Title,
  ListArea,
  ImageArea,
  Information,
  CommLikes,
  InfoPart,
  InfoText,
  TitleEl,
} from "./ProfileScreenStiled";
import imageBG from "../../assets/images/photo.png";
import AddIcon from "../../assets/images/addicon.svg";
import DeleteIcon from "../../assets/images/deleteicon.svg";
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from "@expo/vector-icons";
import defaultImage from "../../assets/images/rectangle.png";
import { Fontisto } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export const Profile = () => {
  const [dataUserState, setDataUserState] = useState(initialState.user);
  const navigation = useNavigation();
  //const data = initialState.posts.postsList;
  const avatar = false;

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

  const data = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      image: defaultImage,
      name: "Forest",
      location: "Ukraine",
      comments: 8, //далее это массив, а 8 это длина массива
      likes: 153,
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      image: defaultImage,
      name: "Sky",
      location: "Ukraine",
      comments: 12,
      likes: 120,
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      image: defaultImage,
      name: "Trees",
      location: "Ukraine",
      comments: 25,
      likes: 156,
    },
  ];

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
            <TouchableOpacity
              style={styles.logOut}
              onPress={() => console.debug("LogOut")}
            >
              <MaterialIcons name="logout" size={24} color="#BDBDBD" />
            </TouchableOpacity>
            <Title>UserName</Title>
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <ListArea>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("CreatePost")} // с передачей данных по id для редактирования
                  >
                    <ImageArea>
                      <Image source={item.image} style={styles.imageItem} />
                    </ImageArea>
                  </TouchableOpacity>
                  <TitleEl>{item.name}</TitleEl>
                  <Information>
                    <CommLikes>
                      <InfoPart>
                        <TouchableOpacity
                          onPress={() => navigation.navigate("Comments")}
                        >
                          <FontAwesome
                            name="comments-o"
                            size={24}
                            color="#FF6C00"
                          />
                        </TouchableOpacity>
                        <InfoText>{item.comments}</InfoText>
                      </InfoPart>
                      <InfoPart>
                        <TouchableOpacity>
                          <SimpleLineIcons
                            name="like"
                            size={22}
                            color="#FF6C00"
                          />
                        </TouchableOpacity>
                        <InfoText>{item.likes}</InfoText>
                      </InfoPart>
                    </CommLikes>
                    <InfoPart>
                      <TouchableOpacity>
                        <Fontisto
                          name="map-marker-alt"
                          size={24}
                          color="#BDBDBD"
                        />
                      </TouchableOpacity>
                      <InfoText style={{ textDecorationLine: "underline" }}>
                        {item.location}
                      </InfoText>
                    </InfoPart>
                  </Information>
                </ListArea>
              )}
              keyExtractor={(item) => item.id}
            />
          </RegisterField>
        </ImageBack>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};
