import { FC } from "react";
import { View, StyleSheet, Text } from "react-native";

interface SelectItemProps {
  title: String;
  selected: boolean;
}

const SelectItem: FC<SelectItemProps> = ({ title, selected }) => {
  return (
    <View style={selected ? styles.selectItemSelected : styles.selectItem}>
      <Text style={selected ? styles.titleSelected : styles.title}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  selectItem: {
    backgroundColor: "#F6F7FB",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 16,
  },
  selectItemSelected: {
    backgroundColor: "#51AD94",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 16,
  },
  title: {
    fontWeight: "600",
  },
  titleSelected: {
    color: "white",
    fontWeight: "600",
  },
});

export default SelectItem;
