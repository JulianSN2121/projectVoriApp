import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { _styles, colors, windowHeight, windowWidth } from "../../AppStyles";
import event1 from "../../../assets/events1.png";
import event2 from "../../../assets/events2.png";
import event3 from "../../../assets/events3.png";
import event4 from "../../../assets/events4.png";
import event5 from "../../../assets/events5.png";

import Header from "../components/Header";
import EventItem from "../components/EventItem";
import DatePicker from "../components/DatePicker";

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

import { eventData } from "../services/apiClient";


// const weekday = [
//   "Sonntag",
//   "Montag",
//   "Dienstag",
//   "Mittwoch",
//   "Donnerstag",
//   "Freitag",
//   "Samstag",
// ];
// const d: Date = new Date();

// const dates = {
//   date: d.getDay(),
//   weekday: weekday[d.getDay()],
// };

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

export default function EventsScreen({ navigation }) {
  const [selectedDate, setSelectedDate] = useState();
  const handleDateChange = (date) => {
    setSelectedDate(date);
    
  };

  const filterEventsByDate = () => {
    if(!selectedDate){
      return Object.values((eventData))
    }
    
    const selectedDateString = selectedDate.toISOString().split('T')[0];
    return Object.values(eventData).filter((event) => {
      const eventDate = event.start_date.split('T')[0];
      return eventDate === selectedDateString;
    })
  }
  
  const filteredEvents = filterEventsByDate(); // Get the filtered events based on the selected date

  return (
    <SafeAreaView style={_styles.safeAreaView}>
      <ScrollView style={{ padding: 14 }}>
        <Header title="Events"></Header>

        <DatePicker onDateChange={handleDateChange}></DatePicker>
        
        {/* <View style={styles.datePickerContainer}>
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
        </View> */}

        <View style={styles.eventsContainer}>
          <View>
              {Object.values(filteredEvents).map((data) => (
                <EventItem key={data.id} data={data} onPress={() => navigation.navigate('EventInfoScreen', { eventData: data })}/>
              ))}
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// function DatePickerItem({ condition, date }) {
//   return (
//     <View
//       style={[
//         styles.datePickerContainer.item,
//         condition
//           ? styles.datePickerContainer.item.isActive
//           : styles.datePickerContainer.item.default,
//       ]}
//     >
//       <Text style={{ color: "white", fontSize: 14, marginBottom: 10 }}>
//         {date.weekday}
//       </Text>
//       <Text style={{ color: "white", fontSize: 30 }}>{date.date}</Text>
//     </View>
//   );
// }

