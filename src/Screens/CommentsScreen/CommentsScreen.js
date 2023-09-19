import React, { useState } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {
  CommentsField,
  ImageArea,
  styles,
  CommentsEl,
  InputItem,
  BtnField,
  CommentEl,
  Avatar,
  TextArea,
  TextEl,
  DataEl,
} from "./CommentsScreenStyled";
import defaultImage from "../../assets/images/rectangle.png";
import { AntDesign } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";
import defaultAvatarImg from "../../assets/images/Avatar.png";
import DefaulrUserImg from "../../assets/images/usericon.svg";

const commentsList = [
  {
    login: "Zemfira",
    avatar: defaultAvatarImg,
    text: "Hi!",
    data: "September 10, 2023 | 09.15 a.m.",
  },
  {
    login: "Nelly",
    avatar: "",
    text: "Hello!",
    data: "September 10, 2023 | 09.28 a.m.",
  },
  {
    login: "Nelly",
    avatar: "",
    text: "How are you?",
    data: "September 10, 2023 | 10.34 a.m.",
  },
  {
    login: "Zemfira",
    avatar: defaultAvatarImg,
    text: "I'm fine, thanks!",
    data: "September 10, 2023 | 10.50 a.m.",
  },
];

export const Comments = () => {
  const defaultBorderColor = "#e8e8e8";
  const accentBorderColor = "#FF6C00";
  const [commentBorderColor, setCommentBorderColor] =
    useState(defaultBorderColor);
  const [comment, setComment] = useState("");

  const addComment = () => {
    const newComment = {
      login: "Zemfira",
      avatar: defaultAvatarImg,
      text: comment,
      data: "September 10, 2023 | 10.50 a.m.",
    };

    //Добавим новый комментарий в массив комментариев,
    //который хранится в стейте (или отправляем на бекенд)

    console.log(newComment);
    setComment("");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <CommentsField>
          <ImageArea>
            <Image source={defaultImage} style={styles.imageItem} />
          </ImageArea>

          <FlatList
            style={{ marginBottom: 80 }}
            data={commentsList}
            renderItem={({ item }) => (
              <CommentEl>
                <Avatar style={item.login === "Zemfira" && styles.rightAvatat}>
                  {item.avatar ? (
                    <Image
                      source={item.avatar}
                      style={{ width: 28, height: 28, borderRadius: 15 }}
                    />
                  ) : (
                    <DefaulrUserImg width={26} height={26} />
                  )}
                </Avatar>
                <TextArea
                  style={item.login === "Zemfira" && styles.rightTextArea}
                >
                  <TextEl>{item.text}</TextEl>
                  <DataEl>{item.data}</DataEl>
                </TextArea>
              </CommentEl>
            )}
          />

          <InputItem style={{ borderColor: commentBorderColor }}>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <TextInput
                placeholder="Leave a comment..."
                keyboardType="default"
                value={comment}
                onChangeText={setComment}
                onFocus={() => setCommentBorderColor(accentBorderColor)}
                onBlur={() => setCommentBorderColor(defaultBorderColor)}
                placeholderTextColor="#BDBDBD"
                style={styles.textSize}
              />
            </KeyboardAvoidingView>
            <TouchableOpacity onPress={addComment}>
              <BtnField>
                <AntDesign name="arrowup" size={24} color="#ffffff" />
              </BtnField>
            </TouchableOpacity>
          </InputItem>
        </CommentsField>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};
