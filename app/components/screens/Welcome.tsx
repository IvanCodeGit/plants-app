import { FC } from "react";
import {
  Image,
  View,
  StyleSheet,
  ImageBackground,
  Text,
  SafeAreaView,
} from "react-native";
import CustomButton from "../ui/CustomButton";

interface WelcomeProps {
  navigation: any;
}

const Welcome: FC<WelcomeProps> = ({ navigation }) => {
  const navigateToHome = () => {
    navigation.navigate("Home");
  };

  return (
    <View>
      <ImageBackground
        source={require("../../assets/plants-background.png")}
        style={styles.image}
      >
        <SafeAreaView>
          <View style={styles.content}>
            <Text style={styles.title}>
              {"Buy Your Favorite\nPlants, Only Here"}
            </Text>
            <View style={styles.buttons}>
              <CustomButton
                title="Log In"
                type="Filled"
                action={navigateToHome}
              />
              <CustomButton
                title="Sign Up"
                type="Outlined"
                action={navigateToHome}
              />
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: "100%",
    justifyContent: "flex-end",
  },
  content: {
    gap: 36,
    padding: 24,
  },
  buttons: {
    gap: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Welcome;
