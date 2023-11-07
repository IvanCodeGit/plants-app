import { FC } from "react";
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface PlantHorizontalCardProps {
  title: String;
  type: String;
  price: Number;
}

const PlantHorizontalCard: FC<PlantHorizontalCardProps> = ({
  title,
  type,
  price,
}) => {
  return (
    <Pressable style={styles.button}>
      <Image source={require("../../assets/plant.jpg")} style={styles.image} />
      <View style={styles.info}>
        <View style={styles.infoText}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.type}>{type}</Text>
        </View>
        <Text style={styles.price}>${price.toString()}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#F6F7FB",
    flexDirection: "row",
    borderRadius: 16,
    padding: 12,
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
  },
  type: {
    fontSize: 14,
    color: "grey",
    fontWeight: "600",
  },
  price: {
    fontSize: 16,
    color: "#51AD94",
    fontWeight: "600",
  },
  info: {
    width: "70%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  infoText: {
    marginLeft: 12,
    justifyContent: "center",
    gap: 2,
  },
});

export default PlantHorizontalCard;
