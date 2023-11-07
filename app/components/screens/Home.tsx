import { Ionicons } from "@expo/vector-icons";
import { FC, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import CustomField from "../ui/CustomField";
import PlantCard from "../ui/PlantCard";
import { plants, plantsHorizontal } from "../../data/data";
import SelectItem from "../ui/SelectItem";
import PlantHorizontalCard from "../ui/PlantHorizontalCard";

interface HomeProps {
  navigation: any;
}

const Home: FC<HomeProps> = ({ navigation }) => {
  const [search, setSearch] = useState("");

  const navigateToDetails = () => {
    navigation.navigate("Details");
  };

  return (
    <View>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerTitles}>
              <Text style={styles.title}>Hi, Fathony</Text>
              <Text style={styles.question}>Do you want to find plants?</Text>
            </View>
            <Pressable>
              <Ionicons name="notifications" color="black" size={24} />
            </Pressable>
          </View>
          <CustomField
            placeholder="Find plants..."
            action={(val) => setSearch(val)}
          />
          <Text style={styles.sectionTitle}>Popular Plants</Text>
          <ScrollView horizontal={true}>
            {plants.map(
              (item: { title: string; price: number }, idx: number) => {
                return (
                  <Pressable
                    key={idx}
                    style={
                      idx != plants.length - 1
                        ? styles.plantsCardContainer
                        : undefined
                    }
                    onPress={navigateToDetails}
                  >
                    <PlantCard title={item.title} price={item.price} />
                  </Pressable>
                );
              }
            )}
          </ScrollView>
          <ScrollView horizontal={true}>
            <View style={styles.sectionItemContainer}>
              <SelectItem title="All" selected={true} />
            </View>
            <View style={styles.sectionItemContainer}>
              <SelectItem title="Indoor" selected={false} />
            </View>
            <View style={styles.sectionItemContainer}>
              <SelectItem title="Outdoor" selected={false} />
            </View>
            <View style={styles.sectionItemContainer}>
              <SelectItem title="Garden" selected={false} />
            </View>
          </ScrollView>
          <ScrollView>
            {plantsHorizontal.map(
              (
                item: { title: string; type: string; price: Number },
                idx: number
              ) => {
                return (
                  <Pressable
                    key={idx}
                    style={
                      idx != plantsHorizontal.length - 1
                        ? styles.plantHorizontalCardContainer
                        : undefined
                    }
                    onPress={navigateToDetails}
                  >
                    <PlantHorizontalCard
                      title={item.title}
                      type={item.type}
                      price={item.price}
                    />
                  </Pressable>
                );
              }
            )}
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 24,
    padding: 24,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitles: {
    gap: 4,
  },
  title: {
    color: "#51AD94",
    fontSize: 24,
    fontWeight: "600",
  },
  question: {
    color: "grey",
    fontWeight: "600",
  },
  sectionTitle: {
    fontWeight: "600",
    fontSize: 18,
  },
  plantsCardContainer: {
    marginRight: 12,
  },
  sectionItemContainer: {
    padding: 6,
  },
  plantHorizontalCardContainer: {
    marginBottom: 12,
  },
});

export default Home;
