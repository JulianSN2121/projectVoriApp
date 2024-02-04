import {
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";
import Header from "../../components/Header";
import EntityItem from "../../components/EntityItem";

const styles = StyleSheet.create({
  entitiesContainer: {
    flex: 1,
  },
});

export default function CategoryEntitiesScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ padding: 14 }}>

        <Header title="Restaurants"></Header>

        <View style={styles.entitiesContainer}>
            <EntityItem></EntityItem>
            <EntityItem></EntityItem>
            <EntityItem></EntityItem>
            <EntityItem></EntityItem>
            <EntityItem></EntityItem>
            <EntityItem></EntityItem>
            <EntityItem></EntityItem>
            <EntityItem></EntityItem>
            <EntityItem></EntityItem>
            <EntityItem></EntityItem>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}