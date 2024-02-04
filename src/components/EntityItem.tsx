import {
    View,
    Image,
    StyleSheet,
    Text,
  } from "react-native";
  
import EntityPriceInfoWidget from "./EntityPriceInfoWidget";
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

  export default function EntityItem({ data }) {
    return (
      <View style={styles.entityItemContainer}>
        <View style={styles.entityItemContainer.imageContainer}>
          <Image style={styles.banner} source={Restaurant}></Image>
        </View>
        <View style={styles.entityItemContainer.contentContainer}>
          <View
            style={styles.entityItemContainer.contentContainer.titleContainer}
          >
            <Text>{data.name}</Text>
          </View>
          <View
            style={
              styles.entityItemContainer.contentContainer.descriptionContainer
            }
          >
            <Text style={{ fontSize: 10 }}>
              {data.description}
            </Text>
          </View>
          <View
            style={
              styles.entityItemContainer.contentContainer.infoWidgetsContainer
            }
          >
            <EntityPriceInfoWidget marginRight={10} price_range={data.price_range}></EntityPriceInfoWidget>
            <LocationInfoWidget data={data.location} marginRight={0}></LocationInfoWidget>
          </View>
        </View>
      </View>
    );
  }
  