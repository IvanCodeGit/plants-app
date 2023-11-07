import { Ionicons } from "@expo/vector-icons";
import { FC } from "react";
import {
  ImageBackground,
  Text,
  StyleSheet,
  View,
  Pressable,
} from "react-native";

interface PlantCardProps {
  title: String;
  price: Number;
}

const PlantCard: FC<PlantCardProps> = ({ title, price }) => {
  return (
    <ImageBackground
      source={require("../../assets/plants-card.png")}
      style={styles.image}
      imageStyle={{ borderRadius: 16 }}
    >
      <View style={styles.info}>
        <View style={styles.textInfo}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>${price.toString()}</Text>
        </View>
        <Ionicons name="chevron-forward" color="white" />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 250,
    justifyContent: "flex-end",
    padding: 16,
  },
  title: {
    color: "white",
    fontWeight: "600",
  },
  price: {
    color: "white",
    fontWeight: "600",
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    backgroundColor: "#313A37",
    borderRadius: 16,

    padding: 16,
  },
  textInfo: {},
});

export default PlantCard;
