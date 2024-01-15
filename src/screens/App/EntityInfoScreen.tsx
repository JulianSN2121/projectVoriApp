import React from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  Text,
} from "react-native";
import { colors, windowHeight, windowWidth } from "../../../AppStyles";
import Header from "../../components/Header";
import CallWidget from "../../components/CallWidget";
import OpeningStatusWidget from "../../components/OpeningStatusWidget";
import RouteWidget from "../../components/RouteWidget";
import WebsiteLinkWidget from "../../components/WebsiteLinkWidget";
import Restaurant from "../../../assets/categoryRestaurantBanner.jpg";
import SocialMediaTabWidget from "../../components/SocialMediaTabWidget";

const menuItems = {
  overview: "Übersicht",
  menu: "Menü",
  events: "Events",
  jobs: "Jobs",
  reviews: "Bewertungen",
};

export default function EntityInfoScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ padding: 14 }}>
        <Header title="Restaurant 1"></Header>

        <View style={styles.contentContainer}>

          <View style={styles.imageContainer}>
            <Image style={styles.image} source={Restaurant}></Image>
            <View style={styles.widgetOverlayContainer}>
              <View style={styles.widgetOverlayContainer.left}>
                <OpeningStatusWidget></OpeningStatusWidget>
              </View>
              <View style={styles.widgetOverlayContainer.right}>
                <WebsiteLinkWidget></WebsiteLinkWidget>
                <CallWidget></CallWidget>
                <RouteWidget></RouteWidget>
              </View>
            </View>
          </View>

          <View style={styles.tabMenuContainer}>
            <TabMenu></TabMenu>
          </View>

          <View style={styles.entityContentContainer}>
            <View style={styles.descriptionContainer}>
              <Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing eliterem
                ipsum dolor sit amet consectetur, adipisicing elite
              </Text>
            </View>
            <View style={styles.adressContainer}>
              <Text>Adresse</Text>
            </View>
            <View style={styles.openingHoursContainer}>
              <View style={styles.openingHoursHeadingContainer}>
                <Text>Öffnungszeiten</Text>
              </View>
              <View>
                <View style={styles.openingHoursTextContainer}>
                  <OpeningHourItem></OpeningHourItem>
                </View>
              </View>
            </View>

            <View style={styles.socialMediaWidgetsContainer}>
              <SocialMediaTabWidget
                title="Instagram"
                link=""
              ></SocialMediaTabWidget>
              <SocialMediaTabWidget
                title="Facebook"
                link=""
              ></SocialMediaTabWidget>
            </View>
          </View>

        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  imageContainer: {
    backgroundColor: colors.lightGrey,
    height: windowHeight * 0.2,
  },
  widgetOverlayContainer: {
    position: "absolute",
    padding: 5,
    bottom: 0,
    flex: 1,
    flexDirection: "row",
    left: {
      flex: 1,
    },
    right: {
      flex: 2,
      flexDirection: "row",
      justifyContent: "space-evenly",
    },
  },
  tabMenuContainer: {
    marginTop: windowHeight * 0.02,
  },
  tabMenuItem: {
    width: windowWidth / 3.5,
    height: windowHeight / 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0e0e0",
    borderRadius: 4,
    marginRight: 15,
  },
  tabMenuItemText: {
    fontSize: 12,
  },
  entityContentContainer: {

  },
  descriptionContainer: {

  },
  adressContainer: {

  },
  openingHoursContainer: {
  },
  openingHoursHeadingContainer: {

  },
  openingHoursTextContainer: {

  },
  socialMediaWidgetsContainer: {
    flexDirection: "row"
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
  },
});

function TabMenu() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {Object.entries(menuItems).map(([key, title]) => (
        <TabMenuItem key={key} title={title} />
      ))}
    </ScrollView>
  );
}

function TabMenuItem({ title }) {
  return (
    <View style={styles.tabMenuItem}>
      <Text style={styles.tabMenuItemText}>{title}</Text>
    </View>
  );
}

function OpeningHourItem(){
    return (
        <View style={openingHourItem}>
            <View style={weekday}>
                <Text>Sa-Su: 10:00 - 18:00</Text>
            </View>
            <View style={hours}></View>
        </View>
  )
}
