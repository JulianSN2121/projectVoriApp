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
} from "react-native";
import { useState } from "react";
import { Icon } from "react-native-elements";
import Swiper from 'react-native-swiper';
import Animated, { useAnimatedGestureHandler, useSharedValue, useAnimatedStyle } from 'react-native-reanimated';
import { PinchGestureHandler } from 'react-native-gesture-handler';

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
            {/* <OverviewTabContent></OverviewTabContent> */}
            <MenuTabContent></MenuTabContent>
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
  entityContentContainer: {},
  descriptionContainer: {
    height: windowHeight * 0.07,
    justifyContent: "center",
    alignItems: "center",
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
    height: windowHeight * 0.4,
    padding: 5,
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    alignContent: "space-between",
    justifyContent: "space-between",
  },
  boxGrey: { backgroundColor: "grey" },
  boxBlue: { backgroundColor: "blue" },
  boxGreen: { backgroundColor: "green" },
  boxYellow: { backgroundColor: "yellow" },
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
          Lorem ipsum dolor sit amet consectetur, adipisicing eliterem ipsum
          dolor sit amet consectetur, adipisicing elite
        </Text>
      </View>
      <View style={styles.adressContainer}>
        <View>
          <Text>Gießenstraße 38, 6972 Fußach</Text>
        </View>
      </View>
      <View style={styles.openingHoursContainer}>
        <View style={styles.openingHoursHeadingContainer}>
          <Text>Öffnungszeiten</Text>
        </View>
        <View style={styles.openingHoursTextContainer}>
          <OpeningHourItem
            weekday="Montag"
            time="10:00 - 18:00"
          ></OpeningHourItem>
          <OpeningHourItem
            weekday="Dienstag"
            time="10:00 - 18:00"
          ></OpeningHourItem>
          <OpeningHourItem
            weekday="Mittwoch"
            time="10:00 - 18:00"
          ></OpeningHourItem>
          <OpeningHourItem
            weekday="Donnerstag"
            time="10:00 - 18:00"
          ></OpeningHourItem>
          <OpeningHourItem
            weekday="Freitag"
            time="10:00 - 18:00"
          ></OpeningHourItem>
          <OpeningHourItem
            weekday="Samstag"
            time="10:00 - 18:00"
          ></OpeningHourItem>
          <OpeningHourItem
            weekday="Sontag"
            time="10:00 - 18:00"
          ></OpeningHourItem>
        </View>
      </View>

      <View style={styles.socialMediaWidgetsContainer}>
        <SocialMediaTabWidget title="Instagram" link=""></SocialMediaTabWidget>
        <SocialMediaTabWidget title="Facebook" link=""></SocialMediaTabWidget>
      </View>
    </View>
  );
}

function MenuTabContent() {
  const [gridItemWidth, setGridItemWidth] = useState(0);
  const [gridItemHeight, setGridItemHeight] = useState(0);

  const [isPreviewVisible, setIsPreviewVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null)
  
  const [isSliderVisible, setIsSliderVisible] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const images = [
    Restaurant, Restaurant
  ];

  const openSlider = (index) => {
    setSelectedImageIndex(index);
    setIsSliderVisible(true);
  };

  const ZoomableImage = ({ source }) => {
    const scale = useSharedValue(1);

    const onPinchGestureEvent = useAnimatedGestureHandler({
      onActive: (event) => {
        scale.value = event.scale;
      },
      onEnd: () => {
        scale.value = 1; // Reset scale
      },
    });

    const animatedStyle = useAnimatedStyle(() => {
      return {
        transform: [{ scale: scale.value }],
      };
    });

    return (
      <PinchGestureHandler onGestureEvent={onPinchGestureEvent}>
        <Animated.View style={styles.zoomableContainer}>
          <Animated.Image source={source} style={[styles.image, animatedStyle]} resizeMode="contain" />
        </Animated.View>
      </PinchGestureHandler>
    );
  };

  const onParentLayout = (event) => {
    const parentWidth = event.nativeEvent.layout.width;
    const parentHeight = event.nativeEvent.layout.height;
    const calculatedWidth = parentWidth * 0.5 - 15;
    const calculatedHeight = parentHeight * 0.5 - 15;
    setGridItemWidth(calculatedWidth);
    setGridItemHeight(calculatedHeight);
    // console.info(parentWidth, calculatedWidth, calculatedHeight)
  };

  const handleImageClick = (imageSource) => {
    setSelectedImage(imageSource);
    setIsPreviewVisible(true);
  };

  const closePreview = () => {
    setIsPreviewVisible(false);
    setSelectedImage(null);
  };

  return (
    <View style={styles.menuImageContainer} onLayout={onParentLayout}>
      {/* Image Slider Modal */}
      <Modal visible={isSliderVisible} transparent={true} onRequestClose={() => setIsSliderVisible(false)}>
        <Swiper index={selectedImageIndex} loop={false} showsButtons={true}>
          {images.map((image, index) => (
            <View key={index} style={styles.slide}>
              <ZoomableImage source={image} />
            </View>
          ))}
        </Swiper>
      </Modal>
      {isPreviewVisible && (
        <Modal
          animationType="fade"
          transparent={true}
          visible={isPreviewVisible}
          onRequestClose={closePreview}
        >
          <View style={styles1.previewContainer}>
            <Image source={selectedImage} style={styles1.previewImage} />
            <TouchableOpacity
              style={styles1.closeButton}
              onPress={closePreview}
            >
              <Icon name="close"></Icon>
            </TouchableOpacity>
          </View>
        </Modal>
      )}

      <TouchableOpacity onPress={() => handleImageClick(openSlider)}>
        <View
          style={{
            ...styles.boxGrey,
            width: gridItemWidth,
            height: gridItemHeight,
          }}
        >
          <Image style={styles.image} source={Restaurant}></Image>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleImageClick(openSlider)}>
        <View
          style={{
            ...styles.boxGreen,
            width: gridItemWidth,
            height: gridItemHeight,
          }}
        >
          <Image style={styles.image} source={Restaurant}></Image>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleImageClick(openSlider)}>
        <View
          style={{
            ...styles.boxBlue,
            width: gridItemWidth,
            height: gridItemHeight,
          }}
        >
          <Image style={styles.image} source={Restaurant}></Image>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleImageClick(openSlider)}>
        <View
          style={{
            ...styles.boxYellow,
            width: gridItemWidth,
            height: gridItemHeight,
          }}
        >
          <Image style={styles.image} source={Restaurant}></Image>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles1 = StyleSheet.create({
  previewContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // semi-transparent background
  },
  previewImage: {
    width: "80%", // Adjust as needed
    height: "80%", // Adjust as needed
    resizeMode: "contain",
  },
  closeButton: {
    position: "absolute",
    top: 80,
    right: 15,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 5,
    borderColor: colors.lightGrey,

  },
});

function EventsTabContent() {}
