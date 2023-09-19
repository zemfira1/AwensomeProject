import React from "react";
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import { styles } from "../RegistrationScreen/RegistrationScreenStyled";
import {
  AvatarArea,
  UserArea,
  Name,
  Email,
  UserIconArea,
  ListArea,
  ImageArea,
  Information,
  InfoPart,
  InfoText,
  Title,
} from "./PostsScreenStyled";
import UserIcon from "../../assets/images/usericon.svg";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import defaultImage from "../../assets/images/rectangle.png";

const avatar = false;
const name = "Name Lastname";
const email = "login@gmail.com";

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

export const Posts = () => {
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaProvider style={styles.container}>
        <UserArea>
          {avatar ? (
            <AvatarArea source={{ uri: avatar }} />
          ) : (
            <UserIconArea>
              <UserIcon width={60} height={60} />
            </UserIconArea>
          )}
          <View>
            {name && <Name>{name}</Name>}
            {email && <Email>{email}</Email>}
          </View>
        </UserArea>

        <FlatList
          style={{ marginTop: 124 }}
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
              <Title>{item.name}</Title>
              <Information>
                <InfoPart>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Comments")}
                  >
                    <FontAwesome name="comments-o" size={24} color="#BDBDBD" />
                  </TouchableOpacity>
                  <InfoText>{item.comments}</InfoText>
                </InfoPart>
                <InfoPart>
                  <TouchableOpacity>
                    <Fontisto name="map-marker-alt" size={24} color="#BDBDBD" />
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
      </SafeAreaProvider>
    </TouchableWithoutFeedback>
  );
};
