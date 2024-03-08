import {
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet
} from "react-native";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import EntityItem from "../../components/EntityItem";
import RestaurantsBanner from "../../../assets/categoryRestaurantsBanner.jpg";

import { entityData } from "../../services/apiClient";

const styles = StyleSheet.create({
  entitiesContainer: {
    flex: 1,
  },
});


export default function CategoryEntitiesScreen({ navigation, route }) {
  const { categoryType } = route.params;
  const { index } = route.params;
  const [filteredData, setFilteredData] = useState([]);
  const entityTags = [
    "[restaurant]",
    "[bar]",
    "[nightclub]",
    "[hotel]",
    "[accommodation]",
    "[company]",
    "[doctor]",
    "[association]",
    "[organisation]",
  ];
  useEffect(() => {
    const entityTag = entityTags[index] || "";
    const dataFilter = (data, type) => data.filter((item) => item.entity_tag === type);
    const filtered = dataFilter(entityData, entityTag);
    setFilteredData(filtered);
  }, [index, categoryType]);
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ padding: 14 }}>

        <Header title={categoryType}></Header> 

        <View style={styles.entitiesContainer}>
          <View>
            {filteredData.map((data) => (
              <EntityItem key={data.id} data={data} onPress={() => navigation.navigate('EntityInfoScreen', { entityData: data })}/>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}