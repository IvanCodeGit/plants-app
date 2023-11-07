import { FC } from "react";
import { TextInput, StyleSheet } from "react-native";

interface CustomFieldProps {
  placeholder: string;
  action: (val: string) => void;
}

const CustomField: FC<CustomFieldProps> = ({ placeholder, action }) => {
  return (
    <TextInput
      style={styles.textField}
      placeholder={placeholder}
      placeholderTextColor="#C9CBD9"
    />
  );
};

const styles = StyleSheet.create({
  textField: {
    backgroundColor: "#F6F7FB",
    borderRadius: 12,

    fontWeight: "600",

    padding: 20,
  },
});

export default CustomField;
