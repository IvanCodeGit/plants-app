import { FC } from "react";
import { Pressable, Text, StyleSheet } from "react-native";

interface CustomButtonProps {
  title: String;
  type: "Filled" | "Outlined";
  action: () => void;
}

const CustomButton: FC<CustomButtonProps> = ({ title, type, action }) => {
  return (
    <Pressable
      style={type === "Filled" ? styles.buttonFilled : styles.buttonOutlined}
      onPress={action}
    >
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonFilled: {
    width: "100%",
    padding: 20,
    backgroundColor: "#51AD94",
    borderRadius: 16,

    justifyContent: "center",
    alignItems: "center",
  },
  buttonOutlined: {
    width: "100%",
    padding: 20,
    borderColor: "#51AD94",
    borderWidth: 1,
    borderRadius: 16,

    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default CustomButton;
