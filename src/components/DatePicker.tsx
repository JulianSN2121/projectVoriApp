import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet, Pressable } from 'react-native';
import { colors, windowHeight, windowWidth } from "../../AppStyles";


const DatePicker = ({ startDate = "2019-12-10", endDate = "2020-12-30" }) => {
  
  const [dates, setDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const generateDates = (start, end) => {
      let dateArray = [];
      let currentDate = new Date(start);
      const stopDate = new Date(end);
      while (currentDate <= stopDate) {
        const dayOfMonth = currentDate.getDate(); // Get day of month as number
        const weekday = currentDate.toLocaleDateString('en-US', { weekday: 'long' }); 
        dateArray.push({ dayOfMonth, weekday, fullDate: currentDate.toISOString().split('T')[0] }); // Include fullDate for comparison
        currentDate.setDate(currentDate.getDate() + 1);
      }
      return dateArray;
    };
    setDates(generateDates(startDate, endDate));
  }, [startDate, endDate]);

  const renderItem = ({ item }) => {
    const condition = item.fullDate === selectedDate; // Compare against fullDate for selection
    return (
      <DatePickerItem
        condition={condition}
        date={item}
        onPress={() => setSelectedDate(item.fullDate)} // Set fullDate as selectedDate
      />
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        horizontal
        data={dates}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()} 
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const DatePickerItem = ({ condition, date, onPress }) => {

  const styles = StyleSheet.create({
    datePickerContainer: {
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
  });

  return (
    <Pressable
      style={[
        styles.datePickerContainer.item,
        condition
          ? styles.datePickerContainer.item.isActive
          : styles.datePickerContainer.item.default,
      ]}
      onPress={onPress} 
    >
      <Text style={{ color: "white", fontSize: 14, marginBottom: 10 }}>
        {date.weekday}
      </Text>
      <Text style={{ color: "white", fontSize: 30 }}>{date.dayOfMonth}</Text> 
    </Pressable>
  );
};

export default DatePicker;
