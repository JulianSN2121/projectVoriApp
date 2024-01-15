import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  ImageBackground,
} from "react-native";
import { colors, windowWidth, windowHeight } from "../../../AppStyles";
import RestaurantBanner from "../../../assets/categoryRestaurantBanner.jpg";
import Header from "../../components/Header";

const styles = StyleSheet.create({
  categoryBanner: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "500",
  },
  categoryItem: {
    width: windowWidth / 3.5,
    height: windowHeight / 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    marginRight: 12,
    overflow: "hidden",
  },
  slider: {
    flexDirection: "row",
    padding: 5,
    marginTop: 10,
    marginBottom: 20,
  },
  sliderItemContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    marginRight: 10,
    box: {
      width: windowWidth / 2,
      height: 150,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#e0e0e0",
      borderRadius: 10,
    },
    title: {
      fontSize: 16,
      padding: 5,
    },
  },

  categoryItemText: {
    fontSize: 16,
    color: "white",
    padding: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
});

const categoriesTitles = {
  restaurants: "Restaurants",
  bars: "Bars",
  nightclubs: "Nachtclubs",
  hotels: "Hotels",
  accommodations: "Unterkünfte",
  companies: "Unternehmen",
  doctor: "Ärzte",
  associations: "Vereine",
  organisations: "Organisationen",
  events: "Events",
};

const categoriesBannerImages = {
  restaurants: RestaurantBanner,
};

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ padding: 14 }}>
        {/*Header*/}
        <Header title="Entdecke Vorarlberg"></Header>

        {/* Searchbar */}
        <TextInput
          placeholder="Suchen"
          style={{
            borderColor: colors.lightGrey,
            borderWidth: 1,
            borderRadius: 4,
            marginBottom: 10,
            padding: 15,
          }}
        ></TextInput>

        {/* CategoriesSlider */}
        <View>
          <CategoriesSlider></CategoriesSlider>
        </View>

        {/* Events in deiner Nähe */}
        <Text style={{ ...styles.sectionTitle, marginTop: 10 }}>
          Events in deiner Nähe
        </Text>
        <View>
          <SectionSlider sectionName={categoriesTitles.events}></SectionSlider>
        </View>

        {/* Restaurants in deiner Nähe */}
        <Text style={{ ...styles.sectionTitle, marginTop: 10 }}>
          Restaurants in deiner Nähe
        </Text>
        <View>
          <SectionSlider
            sectionName={categoriesTitles.restaurants}
          ></SectionSlider>
        </View>

        {/* Bars in deiner Nähe */}
        <Text style={{ ...styles.sectionTitle, marginTop: 10 }}>
          Bars in deiner Nähe
        </Text>
        <View>
          <SectionSlider sectionName={categoriesTitles.bars}></SectionSlider>
        </View>

        {/* Nachtclubs in deiner Nähe */}
        <Text style={{ ...styles.sectionTitle, marginTop: 10 }}>
          Nachtclubs in deiner Nähe
        </Text>
        <View>
          <SectionSlider
            sectionName={categoriesTitles.nightclubs}
          ></SectionSlider>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function CategoriesSlider() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.slider}
    >
      {Object.entries(categoriesTitles).map(([key, title]) => (
        <CategoryItem key={key} title={title} />
      ))}
    </ScrollView>
  );
}

function CategoryItem({ title }) {
  return (
    <View style={styles.categoryItem}>
      <ImageBackground
        style={styles.categoryBanner}
        source={categoriesBannerImages.restaurants}
      >
        <Text style={styles.categoryItemText}>{title}</Text>
      </ImageBackground>
    </View>
  );
}

function SectionSlider({ sectionName }) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.slider}
    >
      {Object.entries(sectionName).map(([key]) => (
        <SectionSliderItem sectionName={sectionName} key={key} />
      ))}
    </ScrollView>
  );
}

function SectionSliderItem({ sectionName }) {
  return (
    <View style={styles.sliderItemContainer}>
      <View style={styles.sliderItemContainer.box}></View>
      <Text style={styles.sliderItemContainer.title}>{sectionName}</Text>
    </View>
  );
}
