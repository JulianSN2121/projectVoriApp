import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import { colors, windowHeight, windowWidth } from "../../../AppStyles";

import Header from "../../components/Header";
import EventItem from "../../components/EventItem";


const weekday = [
  "Sonntag",
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
];
const d: Date = new Date();

const dates = {
  date: d.getDay(),
  weekday: weekday[d.getDay()],
};

const styles = StyleSheet.create({
  datePickerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    slider: {
      padding: 5,
      marginTop: 10,
      marginBottom: 20,
    },
    item: {
      width: windowWidth / 4.5,
      height: windowHeight / 6.5,
      borderRadius: 10,
      marginRight: 10,
      justifyContent: "center",
      alignItems: "center",
      padding: 10,
      isActive: {
        backgroundColor: colors.red,
      },
      default: {
        backgroundColor: colors.lightGrey,
      },
    },
  },
  eventsContainer: {
    flex: 1,
  },
  
});

export default function EventsScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ padding: 14 }}>
        <Header title="Events"></Header>

        <View style={styles.datePickerContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.datePickerContainer.slider}
          >
            <DatePickerItem condition={true} date={dates}></DatePickerItem>
            <DatePickerItem condition={false} date={dates}></DatePickerItem>
            <DatePickerItem condition={false} date={dates}></DatePickerItem>
            <DatePickerItem condition={false} date={dates}></DatePickerItem>
            <DatePickerItem condition={false} date={dates}></DatePickerItem>
            <DatePickerItem condition={false} date={dates}></DatePickerItem>
          </ScrollView>
        </View>

        <View style={styles.eventsContainer}>
          <EventItem></EventItem>
          <EventItem></EventItem>
          <EventItem></EventItem>
          <EventItem></EventItem>
          <EventItem></EventItem>
          <EventItem></EventItem>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function DatePickerItem({ condition, date }) {
  return (
    <View
      style={[
        styles.datePickerContainer.item,
        condition
          ? styles.datePickerContainer.item.isActive
          : styles.datePickerContainer.item.default,
      ]}
    >
      <Text style={{ color: "white", fontSize: 14, marginBottom: 10 }}>
        {date.weekday}
      </Text>
      <Text style={{ color: "white", fontSize: 30 }}>{date.date}</Text>
    </View>
  );
}

