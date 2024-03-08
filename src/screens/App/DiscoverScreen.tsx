import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigation } from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  ImageBackground,
  Pressable,
  StatusBar
} from "react-native";
import { colors, windowWidth, windowHeight } from "../../../AppStyles";
import AccommodationsBanner from "../../../assets/categoryAccommodationsBanner.jpg";
import AssociationsBanner from "../../../assets/categoryAssociationsBanner.jpg";
import BarsBanner from "../../../assets/categoryBarsBanner.jpg";
import CompaniesBanner from "../../../assets/categoryCompaniesBanner.jpg";
import DoctorsBanner from "../../../assets/categoryDoctorsBanner.jpg";
import EventsBanner from "../../../assets/categoryEventsBanner.jpg";
import HotelsBanner from "../../../assets/categoryHotelsBanner.jpg";
import NightclubsBanner from "../../../assets/categoryNightclubsBanner.jpg";
import OrganisationsBanner from "../../../assets/categoryOrganisationsBanner.jpg";
import RestaurantsBanner from "../../../assets/categoryRestaurantsBanner.jpg";
import Header from "../../components/Header";
import event1 from "../../../assets/events1.png";
import event2 from "../../../assets/events2.png";
import event3 from "../../../assets/events3.png";
import event4 from "../../../assets/events4.png";
import event5 from "../../../assets/events5.png";

import { eventData } from "../../services/apiClient";
import { entityData } from "../../services/apiClient";

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
      borderRadius: 10,
      overflow: "hidden",
    },
    title: {
      fontSize: 16,
      padding: 5,
    },
  },

  categoryItemText: {
    fontSize: 15,
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
  doctors: "Ärzte",
  associations: "Vereine",
  organisations: "Organisationen",
  events: "Events",
};

const categoriesBannerImages = {
  accommodations: AccommodationsBanner,
  associations: AssociationsBanner,
  bars: BarsBanner,
  companies: CompaniesBanner,
  doctors: DoctorsBanner,
  events: EventsBanner,
  hotels: HotelsBanner,
  nightclubs: NightclubsBanner,
  organisations: OrganisationsBanner,
  restaurants: RestaurantsBanner,
}


export default function DiscoverScreen({ navigation }) {
  
  // const [restaurantData, setRestaurantData] = useState([]);
  // const [barData, setBarData] = useState([]);
  // const [nightclubData, setNightclubData] = useState([]);
  // const [hotelData, setHotelData] = useState([]);
  // const [accommodationData, setAccommodationData] = useState([]);
  // const [companyData, setCompanyData] = useState([]);
  // const [doctorData, setDoctorData] = useState([]);
  // const [associationData, setAssociationData] = useState([]);
  // const [organisationData, setOrganisationData] = useState([]);
  // const [eventData, setEventData] = useState([]);

  useEffect(() => {
     const fun = async () => {
        // console.log(data)
        // console.log(data[0].id)
      };
    // fun();
    // setRestaurantData(dataFilter(entityData, "[restaurant]"));
    // setBarData(dataFilter(entityData, "[bar]"));
    // setNightclubData(dataFilter(entityData, "[nightclub]"));
    // setHotelData(dataFilter(entityData, "[hotel]"));
    // setAccommodationData(dataFilter(entityData, "[accommodation]"));
    // setCompanyData(dataFilter(entityData, "[company]"));
    // setDoctorData(dataFilter(entityData, "[doctor]"));
    // setAssociationData(dataFilter(entityData, "[association]"));
    // setOrganisationData(dataFilter(entityData, "[organisation]"));
    // setEventData(dataFilter(eventData, "[event]"));
  }, []);

  
  function dataFilter(data, type){
    return data.filter((item) => item.entity_tag === type)
  }


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar></StatusBar>
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
          <CategoriesSlider navigation={navigation}></CategoriesSlider>
        </View>

        {/* Events in deiner Nähe */}
        <Text style={{ ...styles.sectionTitle, marginTop: 10 }}>
          Events in deiner Nähe
        </Text>
        <View>
          <EventSectionSlider navigation={navigation} data={eventData}></EventSectionSlider>
        </View>

        {/* Restaurants in deiner Nähe */}
        <Text style={{ ...styles.sectionTitle, marginTop: 10 }}>
          Restaurants in deiner Nähe
        </Text>
        <View>
          <SectionSlider navigation={navigation} data={dataFilter(entityData,"[restaurant]")}></SectionSlider>
        </View>

        {/* Bars in deiner Nähe */}
        <Text style={{ ...styles.sectionTitle, marginTop: 10 }}>
          Bars in deiner Nähe
        </Text>
        <View>
          <SectionSlider navigation={navigation} data={dataFilter(entityData,"[bar]")}></SectionSlider>
        </View>

        {/* Nachtclubs in deiner Nähe */}
        <Text style={{ ...styles.sectionTitle, marginTop: 10 }}>
          Nachtclubs in deiner Nähe
        </Text>
        <View>
          <SectionSlider navigation={navigation} data={dataFilter(entityData,"[nightclub]")}></SectionSlider>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function CategoriesSlider({ navigation  }) {
  const entries = Object.entries(categoriesTitles);
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.slider}
    >
      {Object.entries(categoriesTitles).map(([key, title], index) => (
        <CategoryItem
          onPress={() => {
            if (index === entries.length - 1) {
            navigation.navigate('EventsScreen', {categoryType: title });
          } else {
            navigation.navigate('CategoryEntitiesScreen', { categoryType: title, index: index });
          }}}
          key={key}
          title={title}
          imageSource={categoriesBannerImages[key]}
        />
      ))}
    </ScrollView>
  );
}

function CategoryItem({ title, imageSource, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.categoryItem}>
          <ImageBackground style={styles.categoryBanner} source={imageSource}>
            <Text style={styles.categoryItemText}>{title}</Text>
          </ImageBackground>
      </View>
    </Pressable>
  );
}

function SectionSlider({ data, navigation }) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.slider}
    >
      {Object.entries(data).map(([key, data], index) => (
        <SectionSliderItem data={data} key={data.id} onPress={() => {navigation.navigate('EntityInfoScreen', {entityData: data })}}/>
      ))}
    </ScrollView>
  );
}

function SectionSliderItem({ data, onPress }) {
  // const imageUrl = "http://localhost:8055/assets/" + data.banner;
  const imageUrl = "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg";
  return (
    <Pressable onPress={onPress}>
      <View style={styles.sliderItemContainer}>
        <View style={styles.sliderItemContainer.box}>
          <Image
            source={{
              uri: imageUrl,
            }}
            style={{ width: "100%", height: "100%" }}
          />
        </View>
        <Text style={styles.sliderItemContainer.title}>{data.name}</Text>
      </View>
    </Pressable>
  );
}


function EventSectionSlider({ data, navigation }) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.slider}
    >
      {Object.entries(data).map(([key, data], index) => (
        <EventSectionSliderItem data={data} key={data.id} onPress={() => {navigation.navigate('EventInfoScreen', {eventData: data })}}/>
      ))}
    </ScrollView>
  );
}

function EventSectionSliderItem({ data, onPress }) {
  // const imageUrl = "http://localhost:8055/assets/" + data.banner;
  const imageUrl = "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg";
  return (
    <Pressable onPress={onPress}>
      <View style={styles.sliderItemContainer}>
        <View style={styles.sliderItemContainer.box}>
          <Image
            source={{
              uri: imageUrl,
            }}
            style={{ width: "100%", height: "100%" }}
          />
        </View>
        <Text style={styles.sliderItemContainer.title}>{data.name}</Text>
      </View>
    </Pressable>
  );
}
