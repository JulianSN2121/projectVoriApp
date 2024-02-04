import {
    View,
    Text,
    StyleSheet,
    Image,
} from "react-native";
import { colors, windowHeight } from "../../AppStyles";
import PriceInfoWidget from "../components/PriceInfoWidget";
import DateInfoWidget from "../components/DateInfoWidget";
import Event from "../../assets/event.jpeg";

const styles = StyleSheet.create({
    eventItemContainer: {
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
      }
    
});

export default function EventItem() {
    return (
      <View style={styles.eventItemContainer}>
        <View style={styles.eventItemContainer.imageContainer}>
          <Image style={styles.banner} source={Event}></Image>
        </View>
        <View style={styles.eventItemContainer.contentContainer}>
          <View style={styles.eventItemContainer.contentContainer.titleContainer}>
            <Text>Event 1</Text>
          </View>
          <View
            style={
              styles.eventItemContainer.contentContainer.descriptionContainer
            }
          >
            <Text style={{ fontSize: 10 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              excepturi eos, illo.
            </Text>
          </View>
          <View
            style={
              styles.eventItemContainer.contentContainer.infoWidgetsContainer
            }
          >
            <DateInfoWidget marginRight={10}></DateInfoWidget>
            <PriceInfoWidget marginRight={0}></PriceInfoWidget>
          </View>
        </View>
      </View>
    );
}
  