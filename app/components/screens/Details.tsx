import { Ionicons } from "@expo/vector-icons";
import { FC } from "react";
import {
  ImageBackground,
  Pressable,
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  Button,
} from "react-native";
import CustomButton from "../ui/CustomButton";

interface DetailsProps {
  navigation: any;
}

const Details: FC<DetailsProps> = ({ navigation }) => {
  const navigateBack = () => {
    navigation.goBack();
  };

  return (
    <View>
      <ImageBackground source={require("../../assets/plant.jpg")}>
        <SafeAreaView>
          <View style={styles.imageContent}>
            <Pressable style={styles.back} onPress={navigateBack}>
              <Ionicons name="chevron-back" color="white" size={24} />
            </Pressable>
          </View>
        </SafeAreaView>
      </ImageBackground>
      <View style={styles.content}>
        <Text style={styles.title}>Plant</Text>
        <Text style={styles.price}>$32.23</Text>
        <Text style={styles.descriptionTitle}>Description</Text>
        <Text style={styles.description}>
          Is a tropical tree with smooth light-gray bark and entire oblanceolate
          leaves about 2 inches.
        </Text>
        <CustomButton title="Add to cart" action={() => {}} type="Filled" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContent: {
    height: "68%",
    padding: 24,
  },
  back: {
    width: 45,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    backgroundColor: "#313A37",
  },
  content: {
    padding: 24,
    gap: 6,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
  },
  price: {
    fontSize: 20,
    fontWeight: "600",
    color: "#51AD94",
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  description: {
    color: "grey",
    marginBottom: 12,
  },
});

export default Details;
