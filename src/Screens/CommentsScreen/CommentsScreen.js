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
} from "./CommentsScreenStyled";
import defaultImage from "../../assets/images/rectangle.png";
import { AntDesign } from "@expo/vector-icons";

export const Comments = () => {
  const defaultBorderColor = "#e8e8e8";
  const accentBorderColor = "#FF6C00";
  const [commentBorderColor, setCommentBorderColor] =
    useState(defaultBorderColor);
  const [comment, setComment] = useState("");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <CommentsField>
          <ImageArea>
            <Image source={defaultImage} style={styles.imageItem} />
          </ImageArea>
          <CommentsEl></CommentsEl>
          <InputItem style={{ borderColor: commentBorderColor }}>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <TextInput
                placeholder="Leave a comment..."
                keyboardType="default"
                value={comment}
                onChangeText={() => setComment(comment)}
                onFocus={() => setCommentBorderColor(accentBorderColor)}
                onBlur={() => setCommentBorderColor(defaultBorderColor)}
                placeholderTextColor="#BDBDBD"
                style={styles.textSize}
              />
            </KeyboardAvoidingView>
            <TouchableOpacity onPress={() => console.log("Post a comment")}>
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
