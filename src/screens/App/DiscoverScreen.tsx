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
  ImageBackground,
  Pressable,
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

import { apiClient } from "../../services/apiClient";

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
      overflow: "hidden",
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
};

const demoDataEvents = {
  1: {
    id: 1,
    name: "Event 1",
    description: "Event 1 is great",
    ticket_price: "30",
    banner: "84c65e47-644d-4687-ac7d-4567ac9c7498",
    start_date: "2024-01-04T15:06:00",
    end_date: "2024-01-31T12:00:00",
    imageUrl: event1,
  },
  2: {
    id: 2,
    name: "Event 2",
    description: "Event 2 is great",
    ticket_price: "30",
    banner: "1f0b1d4f-805a-4e90-9419-80d8603a2dfa",
    start_date: "2024-01-04T15:06:01",
    end_date: "2024-01-31T12:00:01",
    imageUrl: event2,
  },
  3: {
    id: 3,
    name: "Event 3",
    description: "Event 3 is great",
    ticket_price: "30",
    banner: "f43d37c3-1b49-4eb8-b39e-b098d3ea0a87",
    start_date: "2024-01-04T15:06:02",
    end_date: "2024-01-31T12:00:02",
    imageUrl: event3,
  },
  4: {
    id: 4,
    name: "Event 4",
    description: "Event 4 is great",
    ticket_price: "30",
    banner: "f749cbb6-ab78-46cb-8edf-60a696d1e69a",
    start_date: "2024-01-04T15:06:03",
    end_date: "2024-01-31T12:00:03",
    imageUrl: event4,
  },
  5: {
    id: 5,
    name: "Event 5",
    description: "Event 5 is great",
    ticket_price: "30",
    banner: "d970125d-045e-4ad1-aee0-b1d2c59c9a6d",
    start_date: "2024-01-04T15:06:04",
    end_date: "2024-01-31T12:00:04",
    imageUrl: event5,
  },
  6: {
    id: 6,
    name: "Event 6",
    description: "Event 6 is great",
    ticket_price: "30",
    banner: "84c65e47-644d-4687-ac7d-4567ac9c7498",
    start_date: "2024-01-04T15:06:05",
    end_date: "2024-01-31T12:00:05",
    imageUrl: event1,
  },
  7: {
    id: 7,
    name: "Event 7",
    description: "Event 7 is great",
    ticket_price: "30",
    banner: "1f0b1d4f-805a-4e90-9419-80d8603a2dfa",
    start_date: "2024-01-04T15:06:06",
    end_date: "2024-01-31T12:00:06",
    imageUrl: event2,
  },
  8: {
    id: 8,
    name: "Event 8",
    description: "Event 8 is great",
    ticket_price: "30",
    banner: "f43d37c3-1b49-4eb8-b39e-b098d3ea0a87",
    start_date: "2024-01-04T15:06:07",
    end_date: "2024-01-31T12:00:07",
    imageUrl: event3,
  },
  9: {
    id: 9,
    name: "Event 9",
    description: "Event 9 is great",
    ticket_price: "30",
    banner: "f749cbb6-ab78-46cb-8edf-60a696d1e69a",
    start_date: "2024-01-04T15:06:08",
    end_date: "2024-01-31T12:00:08",
    imageUrl: event4,
  },
  10: {
    id: 10,
    name: "Event 10",
    description: "Event 10 is great",
    ticket_price: "30",
    banner: "d970125d-045e-4ad1-aee0-b1d2c59c9a6d",
    start_date: "2024-01-04T15:06:09",
    end_date: "2024-01-31T12:00:09",
    imageUrl: event5,
  },
};
const demoDataRestaurants = {
  1: {
    id: 1,
    banner: "4e664158-9481-48ee-ad50-b596d504ff85",
    imageUrl: RestaurantsBanner,
    name: "Restaurant 1",
    entity_tag: ["restaurant"],
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    postalcode: "6972",
    street: "Musterstreet",
    housenumber: "1",
    phone_contact: "43 660 0000000",
    opening_hours_monday: "10:00 - 18:00",
    opening_hours_tuesday: "10:00 - 18:00",
    opening_hours_wednesday: "10:00 - 18:00",
    opening_hours_thursday: "10:00 - 18:00",
    opening_hours_friday: "10:00 - 18:00",
    opening_hours_saturday: "10:00 - 18:00",
    opening_hours_sunday: "10:00 - 18:00",
    website_link: "www.testwebsite.com",
    instagram_link: "www.instagram.com",
    facebook_link: "www.facebook.com",
    images: null,
    menu: null,
    location: null,
    events: [],
    jobs: [],
  },
  2: {
    id: 2,
    banner: "4e664158-9481-48ee-ad50-b596d504ff85",
    imageUrl: RestaurantsBanner,
    name: "Restaurant 2",
    entity_tag: ["restaurant"],
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    postalcode: "6972",
    street: "Musterstreet",
    housenumber: "2",
    phone_contact: "43 660 0000000",
    opening_hours_monday: "10:00 - 18:00",
    opening_hours_tuesday: "10:00 - 18:00",
    opening_hours_wednesday: "10:00 - 18:00",
    opening_hours_thursday: "10:00 - 18:00",
    opening_hours_friday: "10:00 - 18:00",
    opening_hours_saturday: "10:00 - 18:00",
    opening_hours_sunday: "10:00 - 18:00",
    website_link: "www.testwebsite.com",
    instagram_link: "www.instagram.com",
    facebook_link: "www.facebook.com",
    images: null,
    menu: null,
    location: null,
    events: [],
    jobs: [],
  },
  3: {
    id: 3,
    banner: "4e664158-9481-48ee-ad50-b596d504ff85",
    imageUrl: RestaurantsBanner,
    name: "Restaurant 3",
    entity_tag: ["restaurant"],
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    postalcode: "6972",
    street: "Musterstreet",
    housenumber: "3",
    phone_contact: "43 660 0000000",
    opening_hours_monday: "10:00 - 18:00",
    opening_hours_tuesday: "10:00 - 18:00",
    opening_hours_wednesday: "10:00 - 18:00",
    opening_hours_thursday: "10:00 - 18:00",
    opening_hours_friday: "10:00 - 18:00",
    opening_hours_saturday: "10:00 - 18:00",
    opening_hours_sunday: "10:00 - 18:00",
    website_link: "www.testwebsite.com",
    instagram_link: "www.instagram.com",
    facebook_link: "www.facebook.com",
    images: null,
    menu: null,
    location: null,
    events: [],
    jobs: [],
  },
  4: {
    id: 4,
    banner: "4e664158-9481-48ee-ad50-b596d504ff85",
    imageUrl: RestaurantsBanner,
    name: "Restaurant 4",
    entity_tag: ["restaurant"],
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    postalcode: "6972",
    street: "Musterstreet",
    housenumber: "4",
    phone_contact: "43 660 0000000",
    opening_hours_monday: "10:00 - 18:00",
    opening_hours_tuesday: "10:00 - 18:00",
    opening_hours_wednesday: "10:00 - 18:00",
    opening_hours_thursday: "10:00 - 18:00",
    opening_hours_friday: "10:00 - 18:00",
    opening_hours_saturday: "10:00 - 18:00",
    opening_hours_sunday: "10:00 - 18:00",
    website_link: "www.testwebsite.com",
    instagram_link: "www.instagram.com",
    facebook_link: "www.facebook.com",
    images: null,
    menu: null,
    location: null,
    events: [],
    jobs: [],
  },
  5: {
    id: 5,
    banner: "4e664158-9481-48ee-ad50-b596d504ff85",
    imageUrl: RestaurantsBanner,
    name: "Restaurant 5",
    entity_tag: ["restaurant"],
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    postalcode: "6972",
    street: "Musterstreet",
    housenumber: "5",
    phone_contact: "43 660 0000000",
    opening_hours_monday: "10:00 - 18:00",
    opening_hours_tuesday: "10:00 - 18:00",
    opening_hours_wednesday: "10:00 - 18:00",
    opening_hours_thursday: "10:00 - 18:00",
    opening_hours_friday: "10:00 - 18:00",
    opening_hours_saturday: "10:00 - 18:00",
    opening_hours_sunday: "10:00 - 18:00",
    website_link: "www.testwebsite.com",
    instagram_link: "www.instagram.com",
    facebook_link: "www.facebook.com",
    images: null,
    menu: null,
    location: null,
    events: [],
    jobs: [],
  },
  6: {
    id: 6,
    banner: "4e664158-9481-48ee-ad50-b596d504ff85",
    imageUrl: RestaurantsBanner,
    name: "Restaurant 6",
    entity_tag: ["restaurant"],
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    postalcode: "6972",
    street: "Musterstreet",
    housenumber: "6",
    phone_contact: "43 660 0000000",
    opening_hours_monday: "10:00 - 18:00",
    opening_hours_tuesday: "10:00 - 18:00",
    opening_hours_wednesday: "10:00 - 18:00",
    opening_hours_thursday: "10:00 - 18:00",
    opening_hours_friday: "10:00 - 18:00",
    opening_hours_saturday: "10:00 - 18:00",
    opening_hours_sunday: "10:00 - 18:00",
    website_link: "www.testwebsite.com",
    instagram_link: "www.instagram.com",
    facebook_link: "www.facebook.com",
    images: null,
    menu: null,
    location: null,
    events: [],
    jobs: [],
  },
  7: {
    id: 7,
    banner: "4e664158-9481-48ee-ad50-b596d504ff85",
    imageUrl: RestaurantsBanner,
    name: "Restaurant 7",
    entity_tag: ["restaurant"],
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    postalcode: "6972",
    street: "Musterstreet",
    housenumber: "7",
    phone_contact: "43 660 0000000",
    opening_hours_monday: "10:00 - 18:00",
    opening_hours_tuesday: "10:00 - 18:00",
    opening_hours_wednesday: "10:00 - 18:00",
    opening_hours_thursday: "10:00 - 18:00",
    opening_hours_friday: "10:00 - 18:00",
    opening_hours_saturday: "10:00 - 18:00",
    opening_hours_sunday: "10:00 - 18:00",
    website_link: "www.testwebsite.com",
    instagram_link: "www.instagram.com",
    facebook_link: "www.facebook.com",
    images: null,
    menu: null,
    location: null,
    events: [],
    jobs: [],
  },
  8: {
    id: 8,
    banner: "4e664158-9481-48ee-ad50-b596d504ff85",
    imageUrl: RestaurantsBanner,
    name: "Restaurant 8",
    entity_tag: ["restaurant"],
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    postalcode: "6972",
    street: "Musterstreet",
    housenumber: "8",
    phone_contact: "43 660 0000000",
    opening_hours_monday: "10:00 - 18:00",
    opening_hours_tuesday: "10:00 - 18:00",
    opening_hours_wednesday: "10:00 - 18:00",
    opening_hours_thursday: "10:00 - 18:00",
    opening_hours_friday: "10:00 - 18:00",
    opening_hours_saturday: "10:00 - 18:00",
    opening_hours_sunday: "10:00 - 18:00",
    website_link: "www.testwebsite.com",
    instagram_link: "www.instagram.com",
    facebook_link: "www.facebook.com",
    images: null,
    menu: null,
    location: null,
    events: [],
    jobs: [],
  },
  9: {
    id: 9,
    banner: "4e664158-9481-48ee-ad50-b596d504ff85",
    imageUrl: RestaurantsBanner,
    name: "Restaurant 9",
    entity_tag: ["restaurant"],
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    postalcode: "6972",
    street: "Musterstreet",
    housenumber: "9",
    phone_contact: "43 660 0000000",
    opening_hours_monday: "10:00 - 18:00",
    opening_hours_tuesday: "10:00 - 18:00",
    opening_hours_wednesday: "10:00 - 18:00",
    opening_hours_thursday: "10:00 - 18:00",
    opening_hours_friday: "10:00 - 18:00",
    opening_hours_saturday: "10:00 - 18:00",
    opening_hours_sunday: "10:00 - 18:00",
    website_link: "www.testwebsite.com",
    instagram_link: "www.instagram.com",
    facebook_link: "www.facebook.com",
    images: null,
    menu: null,
    location: null,
    events: [],
    jobs: [],
  },
  10: {
    id: 10,
    banner: "4e664158-9481-48ee-ad50-b596d504ff85",
    imageUrl: RestaurantsBanner,
    name: "Restaurant 10",
    entity_tag: ["restaurant"],
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    postalcode: "6972",
    street: "Musterstreet",
    housenumber: "10",
    phone_contact: "43 660 0000000",
    opening_hours_monday: "10:00 - 18:00",
    opening_hours_tuesday: "10:00 - 18:00",
    opening_hours_wednesday: "10:00 - 18:00",
    opening_hours_thursday: "10:00 - 18:00",
    opening_hours_friday: "10:00 - 18:00",
    opening_hours_saturday: "10:00 - 18:00",
    opening_hours_sunday: "10:00 - 18:00",
    website_link: "www.testwebsite.com",
    instagram_link: "www.instagram.com",
    facebook_link: "www.facebook.com",
    images: null,
    menu: null,
    location: null,
    events: [],
    jobs: [],
  },
};


export default function DiscoverScreen() {
  // useEffect(() => {
  //    const fun = async () => {
  //      await apiClient("entities");
  //    };
  //   fun();
  // }, []);
  

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
          <SectionSlider data={demoDataEvents}></SectionSlider>
        </View>

        {/* Restaurants in deiner Nähe */}
        <Text style={{ ...styles.sectionTitle, marginTop: 10 }}>
          Restaurants in deiner Nähe
        </Text>
        <View>
          <SectionSlider data={demoDataRestaurants}></SectionSlider>
        </View>

        {/* Bars in deiner Nähe */}
        <Text style={{ ...styles.sectionTitle, marginTop: 10 }}>
          Bars in deiner Nähe
        </Text>
        <View>
          <SectionSlider data={demoDataEvents}></SectionSlider>
        </View>

        {/* Nachtclubs in deiner Nähe */}
        <Text style={{ ...styles.sectionTitle, marginTop: 10 }}>
          Nachtclubs in deiner Nähe
        </Text>
        <View>
          <SectionSlider data={demoDataRestaurants}></SectionSlider>
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
        <CategoryItem
          key={key}
          title={title}
          imageSource={categoriesBannerImages[key]}
        />
      ))}
    </ScrollView>
  );
}

function CategoryItem({ title, imageSource }) {
  return (
    <Pressable>
      <View style={styles.categoryItem}>
          <ImageBackground style={styles.categoryBanner} source={imageSource}>
            <Text style={styles.categoryItemText}>{title}</Text>
          </ImageBackground>
      </View>
    </Pressable>
  );
}

function SectionSlider({ data }) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.slider}
    >
      {Object.entries(data).map(([key, event]) => (
        <SectionSliderItem event={event} key={event.id} />
      ))}
    </ScrollView>
  );
}

function SectionSliderItem({ event }) {
  return (
    <View style={styles.sliderItemContainer}>
      <View style={styles.sliderItemContainer.box}>
        <ImageBackground
          source={event.imageUrl}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      <Text style={styles.sliderItemContainer.title}>{event.name}</Text>
    </View>
  );
}
