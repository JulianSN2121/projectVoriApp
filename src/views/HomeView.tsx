import React, { useState } from "react";
import { useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "../../AppStyles";
import { getAllEntities } from "../services/apiClient";

export default function HomeScreen() {
  const [Restaurants, setRestaurants] = useState([]);
  const [Bars, setBars] = useState([]);
  const [Nightclubs, setNightclubs] = useState([]);
  const [Hotels, setHotels] = useState([]);
  const [Accommodation, setAccommodations] = useState([]);
  const [Company, setCompany] = useState([]);
  const [Association, setAssociation] = useState([]);
  const [Organisation, setOrganisation] = useState([]);
  const [Events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllEntities();
        setRestaurants(data.restaurants);
        setBars(data.bars);
        setNightclubs(data.nightclubs);
        setHotels(data.hotels);
        setAccommodations(data.accommodations);
        setCompany(data.company);
        setAssociation(data.association);
        setOrganisation(data.organisation);
        setEvents(data.events)
      }
      catch (error) {
        console.log('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Entdecke Vorarlberg</Text>
          <TouchableOpacity style={styles.mapIcon}>
            <MaterialCommunityIcons name="map-marker" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={styles.sectionTitle}>Restaurants</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.slider}
        >
          <SliderItem title="Restaurant 1" />
          <SliderItem title="Restaurant 2" />
          <SliderItem title="Restaurant 3" />
        </ScrollView>
        <Text style={styles.sectionTitle}>Bars</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.slider}
        >
          <SliderItem title="Bar 1" />
          <SliderItem title="Bar 2" />
          <SliderItem title="Bar 3" />
        </ScrollView>
        <Text style={styles.sectionTitle}>Events in deiner Nähe</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.slider}
        >
          <SliderItem title="Event 1" />
          <SliderItem title="Event 2" />
          <SliderItem title="Event 3" />
        </ScrollView>
        <Text style={styles.sectionTitle}>Unternehmen</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.slider}
        >
          <SliderItem title="Unternehmen 1" />
          <SliderItem title="Unternehmen 2" />
          <SliderItem title="Unternehmen 3" />
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

function SliderItem({ title }) {
  return (
    <View style={styles.sliderItem}>
      <Text style={styles.sliderItemText}>{title}</Text>
    </View>
  );
}
