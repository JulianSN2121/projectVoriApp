import {
    View,
    Image,
    StyleSheet,
    Text,
  } from "react-native";
  
import PriceInfoWidget from "../components/PriceInfoWidget";
import LocationInfoWidget from "../components/LocationInfoWidget";
import { colors, windowHeight } from "../../AppStyles";

import Restaurant from "../../assets/categoryRestaurantsBanner.jpg";

const styles = StyleSheet.create({
    entitiesContainer: {
      flex: 1,
    },
    entityItemContainer: {
      flexDirection: "row",
      width: "100%",
      height: windowHeight / 8,
      borderWidth: 1,
      borderRadius: 10,
      borderColor: colors.lightGrey,
      marginBottom: 10,
      imageContainer: {
        width: "40%",
        padding: 6,
      },
      contentContainer: {
        width: "60%",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 6,
        titleContainer: {
          padding: 3,
        },
        descriptionContainer: {
          padding: 3,
        },
        infoWidgetsContainer: {
          flexDirection: "row",
        },
      },
    },
    banner: {
      width: "100%",
      height: "100%",
      borderRadius: 5,
    },
  });

  export default function EntityItem() {
    return (
      <View style={styles.entityItemContainer}>
        <View style={styles.entityItemContainer.imageContainer}>
          <Image style={styles.banner} source={Restaurant}></Image>
        </View>
        <View style={styles.entityItemContainer.contentContainer}>
          <View
            style={styles.entityItemContainer.contentContainer.titleContainer}
          >
            <Text>Restaurant 1</Text>
          </View>
          <View
            style={
              styles.entityItemContainer.contentContainer.descriptionContainer
            }
          >
            <Text style={{ fontSize: 10 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              excepturi eos, illo.
            </Text>
          </View>
          <View
            style={
              styles.entityItemContainer.contentContainer.infoWidgetsContainer
            }
          >
            <PriceInfoWidget marginRight={10}></PriceInfoWidget>
            <LocationInfoWidget marginRight={0}></LocationInfoWidget>
          </View>
        </View>
      </View>
    );
  }
  