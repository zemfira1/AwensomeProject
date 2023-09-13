import { ImageBackground, Text, View } from "react-native";
import imageBG from "../images/photo.png";

export const Registration = () => {
  return (
    <ImageBackground source={imageBG} style={{ width: "100%", height: "100%" }}>
      <Text>Inside</Text>
    </ImageBackground>
  );
};
