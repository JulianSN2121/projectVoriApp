import React from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Modal,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { useState, useEffect } from "react";
import { Icon } from "react-native-elements";
import Swiper from "react-native-swiper";

import { colors, windowHeight, windowWidth } from "../../../AppStyles";
import Header from "../../components/Header";
import CallWidget from "../../components/CallWidget";
import OpeningStatusWidget from "../../components/OpeningStatusWidget";
import RouteWidget from "../../components/RouteWidget";
import WebsiteLinkWidget from "../../components/WebsiteLinkWidget";
import Restaurant from "../../../assets/categoryRestaurantsBanner.jpg";
import SocialMediaTabWidget from "../../components/SocialMediaTabWidget";

const menuItems = {
  overview: "Übersicht",
  menu: "Menü",
  events: "Events",
  jobs: "Jobs",
  reviews: "Bewertungen",
};

const demoData = {
    id: 1,
    banner: "4e664158-9481-48ee-ad50-b596d504ff85",
    name: "Restaurant 1",
    entity_tag: ["restaurant"],
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore sanctus est Lorem ipsum dolor sit amet.",
    postalcode: "6972",
    street: "Gießenstraße",
    housenumber: "38",
    location: "Fußach",
    phone_contact: "+43 660 5457491",
    opening_hours_monday: "09:00 - 18:00",
    opening_hours_tuesday: "10:00 - 18:00",
    opening_hours_wednesday: "10:00 - 18:00",
    opening_hours_thursday: "10:00 - 18:00",
    opening_hours_friday: "10:00 - 18:00",
    opening_hours_saturday: "10:00 - 18:00",
    opening_hours_sunday: "09:00 - 18:00",
    website_link: "www.google.com",
    instagram_link: "www.instagram.com",
    facebook_link: "www.facebook.com",
    images: null,
    menu: null,
};

export default function EntityInfoScreen() {
  const [selectedTab, setSelectedTab] = useState("overview"); // Default to 'overview'

  const handleTabSelect = (tabKey) => {
    setSelectedTab(tabKey);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ padding: 14 }}>
        <Header title={demoData.name}></Header>

        <View style={styles.contentContainer}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={Restaurant}></Image>
            <View style={styles.widgetOverlayContainer}>
              <View style={styles.widgetOverlayContainer.left}>
                <OpeningStatusWidget></OpeningStatusWidget>
              </View>
              <View style={styles.widgetOverlayContainer.right}>
                <WebsiteLinkWidget websiteLink={demoData.website_link}></WebsiteLinkWidget>
                <CallWidget phoneNumber={demoData.phone_contact}></CallWidget>
                <RouteWidget address={[demoData.street, demoData.housenumber, demoData.postalcode]}></RouteWidget>
              </View>
            </View>
          </View>

          <View style={styles.tabMenuContainer}>
            <TabMenu onSelectTab={handleTabSelect} selectedTab={selectedTab} />
          </View>

          <View style={styles.entityContentContainer}>
            {selectedTab === "overview" && (
              <OverviewTabContent></OverviewTabContent>
            )}
            {selectedTab === "menu" && <MenuTabContent></MenuTabContent>}
            {selectedTab === "menu" && <MenuTabContent></MenuTabContent>}
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
  selectedTab: {
    backgroundColor: colors.red,
  },
  entityContentContainer: {},
  descriptionContainer: {
    height: windowHeight * 0.07,
    justifyContent: "center",
  },
  adressContainer: {
    height: windowHeight * 0.07,
    justifyContent: "center",
  },
  openingHoursContainer: {
    marginBottom: 20,
  },
  openingHoursHeadingContainer: {
    height: windowHeight * 0.04,
    justifyContent: "center",
  },
  openingHoursTextContainer: {},
  openingHoursItemContainer: {
    height: windowHeight * 0.02,
    flex: 1,
    flexDirection: "row",
  },
  weekday: {
    flex: 1,
  },
  time: {
    flex: 1,
  },
  socialMediaWidgetsContainer: {
    flexDirection: "row",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
  },
  menuImageContainer: {
    height: windowWidth * 0.5 - 20,
    padding: 5,
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    alignContent: "space-between",
    justifyContent: "space-between",
  },
});

function TabMenu({ onSelectTab, selectedTab }) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {Object.entries(menuItems).map(([key, title]) => (
        <TabMenuItem
          key={key}
          title={title}
          onPress={() => onSelectTab(key)}
          isSelected={selectedTab === key}
        />
      ))}
    </ScrollView>
  );
}

function TabMenuItem({ title, onPress, isSelected }) {
  return (
    <View style={[styles.tabMenuItem, isSelected && styles.selectedTab]}>
      <Pressable onPress={onPress}>
        <Text style={styles.tabMenuItemText}>{title}</Text>
      </Pressable>
    </View>
  );
}

function OpeningHourItem({ weekday, time }) {
  return (
    <View style={styles.openingHoursItemContainer}>
      <View style={styles.weekday}>
        <Text>{weekday}:</Text>
      </View>
      <View style={styles.time}>
        <Text>{time}</Text>
      </View>
    </View>
  );
}

function OverviewTabContent() {
  return (
    <View style={styles.overviewTabContainer}>
      <View style={styles.descriptionContainer}>
        <Text>
          {demoData.description}
        </Text>
      </View>
      <View style={styles.adressContainer}>
        <View>
          <Text>{demoData.street + " " + demoData.housenumber + ", " + demoData.postalcode + " " + demoData.location}</Text>
        </View>
      </View>
      <View style={styles.openingHoursContainer}>
        <View style={styles.openingHoursHeadingContainer}>
          <Text>Öffnungszeiten</Text>
        </View>
        <View style={styles.openingHoursTextContainer}>
          <OpeningHourItem
            weekday="Montag"
            time={demoData.opening_hours_monday}
          ></OpeningHourItem>
          <OpeningHourItem
            weekday="Dienstag"
            time={demoData.opening_hours_tuesday}
          ></OpeningHourItem>
          <OpeningHourItem
            weekday="Mittwoch"
            time={demoData.opening_hours_wednesday}
          ></OpeningHourItem>
          <OpeningHourItem
            weekday="Donnerstag"
            time={demoData.opening_hours_thursday}
          ></OpeningHourItem>
          <OpeningHourItem
            weekday="Freitag"
            time={demoData.opening_hours_friday}
          ></OpeningHourItem>
          <OpeningHourItem
            weekday="Samstag"
            time={demoData.opening_hours_saturday}
          ></OpeningHourItem>
          <OpeningHourItem
            weekday="Sontag"
            time={demoData.opening_hours_sunday}
          ></OpeningHourItem>
        </View>
      </View>

      <View style={styles.socialMediaWidgetsContainer}>
        <SocialMediaTabWidget title="Instagram" link={demoData.instagram_link}></SocialMediaTabWidget>
        <SocialMediaTabWidget title="Facebook" link={demoData.facebook_link}></SocialMediaTabWidget>
      </View>
    </View>
  );
}

function MenuTabContent() {
  // const [gridItemWidth, setGridItemWidth] = useState(0);
  // const [gridItemHeight, setGridItemHeight] = useState(0);

  const [isSliderVisible, setIsSliderVisible] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const [isImagesLoading, setIsImagesLoading] = useState(true);
  const [loadedImagesCount, setLoadedImagesCount] = useState(0);

  const images = [
    Restaurant,
    Restaurant,
    Restaurant,
    Restaurant,
    Restaurant,
    Restaurant,
  ];

  const openSlider = (index) => {
    setSelectedImageIndex(index);
    setIsSliderVisible(true);
  };

  const closeSlider = () => {
    setIsSliderVisible(false);
  };

  const onImageLoad = () => {
    setLoadedImagesCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    if (loadedImagesCount === images.length) {
      setIsImagesLoading(false);
    }
  }, [loadedImagesCount]);
  // const onParentLayout = (event) => {
  //   const parentWidth = event.nativeEvent.layout.width;
  //   const parentHeight = event.nativeEvent.layout.height;
  //   const calculatedWidth = parentWidth * 0.5 - 20;
  //   const calculatedHeight = parentHeight * 0.5 - 20;
  //   setGridItemWidth(calculatedWidth);
  //   setGridItemHeight(calculatedHeight);
  // };

  return (
    <View style={styles.menuImageContainer} /*onLayout={onParentLayout}*/>
      {isImagesLoading && (
        <ActivityIndicator
          size="large"
          color="#0000ff"
          style={styles.spinnerStyle}
        />
      )}
      {images.map((image, index) => (
        <TouchableOpacity key={index} onPress={() => openSlider(index)}>
          <View
            style={{
              width: windowWidth * 0.42,
              height: windowHeight * 0.15,
              marginBottom: windowHeight * 0.02,
            }}
          >
            <Image source={image} style={styles.image} onLoad={onImageLoad} />
          </View>
        </TouchableOpacity>
      ))}
      {/* {images.map((image, index) => (
        <TouchableOpacity key={index} onPress={() => openSlider(index)}>
          <View
            style={{
              width: windowWidth*0.42,
              height: windowHeight*0.15,
              marginBottom: windowHeight * 0.02,
            }}
          >
            <Image source={image} style={styles.image} />
          </View>
        </TouchableOpacity>
      ))} */}

      <Modal visible={isSliderVisible} transparent={true}>
        <View style={styles1.modalContent}>
          <TouchableOpacity style={styles1.closeButton} onPress={closeSlider}>
            <Icon name="close"></Icon>
          </TouchableOpacity>
          <Swiper index={selectedImageIndex} loop={false} showsButtons={true}>
            {images.map((image, index) => (
              <View key={index} style={styles1.slide}>
                <Image source={image} style={styles1.image}></Image>
              </View>
            ))}
          </Swiper>
        </View>
      </Modal>
    </View>
  );
}

const styles1 = StyleSheet.create({
  modalContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  closeButton: {
    position: "absolute",
    top: 80,
    right: 15,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    zIndex: 10,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  image: {
    width: "80%",
    height: "80%",
    resizeMode: "contain",
  },
  zoomableContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

function EventsTabContent() {}
