import {
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";
import Header from "../../components/Header";
import EntityItem from "../../components/EntityItem";
import RestaurantsBanner from "../../../assets/categoryRestaurantsBanner.jpg";

const styles = StyleSheet.create({
  entitiesContainer: {
    flex: 1,
  },
});


const demoDataRestaurants = {
  1: {
    id: 1,
    banner: "4e664158-9481-48ee-ad50-b596d504ff85",
    imageUrl: RestaurantsBanner,
    name: "Restaurant 1",
    entity_tag: ["restaurant"],
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tat, sed dio dolores et, no",
    postalcode: "6972",
    street: "Musterstreet",
    housenumber: "1",
    phone_contact: "43 660 0000000",
    opening_hours_monday: "10:00 - 18:00",
    opening_hours_tuesday: "10:00 - 18:00",
    opening_hours_wednesday: "10:00 - 18:00",
    opening_hours_thursday: "10:00 - 18:00",
    opening_hours_friday: "10:00 - 18:00",
    opening_hours_saturday: "10:00 - 18:00",
    opening_hours_sunday: "10:00 - 18:00",
    website_link: "www.testwebsite.com",
    instagram_link: "www.instagram.com",
    facebook_link: "www.facebook.com",
    images: null,
    menu: null,
    location: "Fußach",
    price_range: "€€€",
    events: [],
    jobs: [],
  },
  2: {
    id: 2,
    banner: "4e664158-9481-48ee-ad50-b596d504ff85",
    imageUrl: RestaurantsBanner,
    name: "Restaurant 2",
    entity_tag: ["restaurant"],
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tat, sed dio dolores et, no",
    postalcode: "6972",
    street: "Musterstreet",
    housenumber: "2",
    phone_contact: "43 660 0000000",
    opening_hours_monday: "10:00 - 18:00",
    opening_hours_tuesday: "10:00 - 18:00",
    opening_hours_wednesday: "10:00 - 18:00",
    opening_hours_thursday: "10:00 - 18:00",
    opening_hours_friday: "10:00 - 18:00",
    opening_hours_saturday: "10:00 - 18:00",
    opening_hours_sunday: "10:00 - 18:00",
    website_link: "www.testwebsite.com",
    instagram_link: "www.instagram.com",
    facebook_link: "www.facebook.com",
    images: null,
    menu: null,
    location: "Fußach",
    price_range: "€€€",
    events: [],
    jobs: [],
  },
  3: {
    id: 3,
    banner: "4e664158-9481-48ee-ad50-b596d504ff85",
    imageUrl: RestaurantsBanner,
    name: "Restaurant 3",
    entity_tag: ["restaurant"],
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tat, sed dio dolores et, no",
    postalcode: "6972",
    street: "Musterstreet",
    housenumber: "3",
    phone_contact: "43 660 0000000",
    opening_hours_monday: "10:00 - 18:00",
    opening_hours_tuesday: "10:00 - 18:00",
    opening_hours_wednesday: "10:00 - 18:00",
    opening_hours_thursday: "10:00 - 18:00",
    opening_hours_friday: "10:00 - 18:00",
    opening_hours_saturday: "10:00 - 18:00",
    opening_hours_sunday: "10:00 - 18:00",
    website_link: "www.testwebsite.com",
    instagram_link: "www.instagram.com",
    facebook_link: "www.facebook.com",
    images: null,
    menu: null,
    location: "Fußach",
    price_range: "€€€",
    events: [],
    jobs: [],
  },
  4: {
    id: 4,
    banner: "4e664158-9481-48ee-ad50-b596d504ff85",
    imageUrl: RestaurantsBanner,
    name: "Restaurant 4",
    entity_tag: ["restaurant"],
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tat, sed dio dolores et, no",
    postalcode: "6972",
    street: "Musterstreet",
    housenumber: "4",
    phone_contact: "43 660 0000000",
    opening_hours_monday: "10:00 - 18:00",
    opening_hours_tuesday: "10:00 - 18:00",
    opening_hours_wednesday: "10:00 - 18:00",
    opening_hours_thursday: "10:00 - 18:00",
    opening_hours_friday: "10:00 - 18:00",
    opening_hours_saturday: "10:00 - 18:00",
    opening_hours_sunday: "10:00 - 18:00",
    website_link: "www.testwebsite.com",
    instagram_link: "www.instagram.com",
    facebook_link: "www.facebook.com",
    images: null,
    menu: null,
    location: "Fußach",
    price_range: "€€€",
    events: [],
    jobs: [],
  },
  5: {
    id: 5,
    banner: "4e664158-9481-48ee-ad50-b596d504ff85",
    imageUrl: RestaurantsBanner,
    name: "Restaurant 5",
    entity_tag: ["restaurant"],
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tat, sed dio dolores et, no",
    postalcode: "6972",
    street: "Musterstreet",
    housenumber: "5",
    phone_contact: "43 660 0000000",
    opening_hours_monday: "10:00 - 18:00",
    opening_hours_tuesday: "10:00 - 18:00",
    opening_hours_wednesday: "10:00 - 18:00",
    opening_hours_thursday: "10:00 - 18:00",
    opening_hours_friday: "10:00 - 18:00",
    opening_hours_saturday: "10:00 - 18:00",
    opening_hours_sunday: "10:00 - 18:00",
    website_link: "www.testwebsite.com",
    instagram_link: "www.instagram.com",
    facebook_link: "www.facebook.com",
    images: null,
    menu: null,
    location: "Fußach",
    price_range: "€€€",
    events: [],
    jobs: [],
  },
  6: {
    id: 6,
    banner: "4e664158-9481-48ee-ad50-b596d504ff85",
    imageUrl: RestaurantsBanner,
    name: "Restaurant 6",
    entity_tag: ["restaurant"],
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tat, sed dio dolores et, no",
    postalcode: "6972",
    street: "Musterstreet",
    housenumber: "6",
    phone_contact: "43 660 0000000",
    opening_hours_monday: "10:00 - 18:00",
    opening_hours_tuesday: "10:00 - 18:00",
    opening_hours_wednesday: "10:00 - 18:00",
    opening_hours_thursday: "10:00 - 18:00",
    opening_hours_friday: "10:00 - 18:00",
    opening_hours_saturday: "10:00 - 18:00",
    opening_hours_sunday: "10:00 - 18:00",
    website_link: "www.testwebsite.com",
    instagram_link: "www.instagram.com",
    facebook_link: "www.facebook.com",
    images: null,
    menu: null,
    location: "Fußach",
    price_range: "€€€",
    events: [],
    jobs: [],
  },
  7: {
    id: 7,
    banner: "4e664158-9481-48ee-ad50-b596d504ff85",
    imageUrl: RestaurantsBanner,
    name: "Restaurant 7",
    entity_tag: ["restaurant"],
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tat, sed dio dolores et, no",
    postalcode: "6972",
    street: "Musterstreet",
    housenumber: "7",
    phone_contact: "43 660 0000000",
    opening_hours_monday: "10:00 - 18:00",
    opening_hours_tuesday: "10:00 - 18:00",
    opening_hours_wednesday: "10:00 - 18:00",
    opening_hours_thursday: "10:00 - 18:00",
    opening_hours_friday: "10:00 - 18:00",
    opening_hours_saturday: "10:00 - 18:00",
    opening_hours_sunday: "10:00 - 18:00",
    website_link: "www.testwebsite.com",
    instagram_link: "www.instagram.com",
    facebook_link: "www.facebook.com",
    images: null,
    menu: null,
    location: "Fußach",
    price_range: "€€€",
    events: [],
    jobs: [],
  },
  8: {
    id: 8,
    banner: "4e664158-9481-48ee-ad50-b596d504ff85",
    imageUrl: RestaurantsBanner,
    name: "Restaurant 8",
    entity_tag: ["restaurant"],
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tat, sed dio dolores et, no",
    postalcode: "6972",
    street: "Musterstreet",
    housenumber: "8",
    phone_contact: "43 660 0000000",
    opening_hours_monday: "10:00 - 18:00",
    opening_hours_tuesday: "10:00 - 18:00",
    opening_hours_wednesday: "10:00 - 18:00",
    opening_hours_thursday: "10:00 - 18:00",
    opening_hours_friday: "10:00 - 18:00",
    opening_hours_saturday: "10:00 - 18:00",
    opening_hours_sunday: "10:00 - 18:00",
    website_link: "www.testwebsite.com",
    instagram_link: "www.instagram.com",
    facebook_link: "www.facebook.com",
    images: null,
    menu: null,
    location: "Fußach",
    price_range: "€€€",
    events: [],
    jobs: [],
  },
  9: {
    id: 9,
    banner: "4e664158-9481-48ee-ad50-b596d504ff85",
    imageUrl: RestaurantsBanner,
    name: "Restaurant 9",
    entity_tag: ["restaurant"],
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tat, sed dio dolores et, no",
    postalcode: "6972",
    street: "Musterstreet",
    housenumber: "9",
    phone_contact: "43 660 0000000",
    opening_hours_monday: "10:00 - 18:00",
    opening_hours_tuesday: "10:00 - 18:00",
    opening_hours_wednesday: "10:00 - 18:00",
    opening_hours_thursday: "10:00 - 18:00",
    opening_hours_friday: "10:00 - 18:00",
    opening_hours_saturday: "10:00 - 18:00",
    opening_hours_sunday: "10:00 - 18:00",
    website_link: "www.testwebsite.com",
    instagram_link: "www.instagram.com",
    facebook_link: "www.facebook.com",
    images: null,
    menu: null,
    location: "Fußach",
    price_range: "€€€",
    events: [],
    jobs: [],
  },
  10: {
    id: 10,
    banner: "4e664158-9481-48ee-ad50-b596d504ff85",
    imageUrl: RestaurantsBanner,
    name: "Restaurant 10",
    entity_tag: ["restaurant"],
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tat, sed dio dolores et, no",
    postalcode: "6972",
    street: "Musterstreet",
    housenumber: "10",
    phone_contact: "43 660 0000000",
    opening_hours_monday: "10:00 - 18:00",
    opening_hours_tuesday: "10:00 - 18:00",
    opening_hours_wednesday: "10:00 - 18:00",
    opening_hours_thursday: "10:00 - 18:00",
    opening_hours_friday: "10:00 - 18:00",
    opening_hours_saturday: "10:00 - 18:00",
    opening_hours_sunday: "10:00 - 18:00",
    website_link: "www.testwebsite.com",
    instagram_link: "www.instagram.com",
    facebook_link: "www.facebook.com",
    images: null,
    menu: null,
    location: "Fußach",
    price_range: "€€€",
    events: [],
    jobs: [],
  },
};

export default function CategoryEntitiesScreen({ route }) {
  
  const {categoryType} = route.params;
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ padding: 14 }}>

        <Header title={categoryType}></Header>

        <View style={styles.entitiesContainer}>
          <View>
            {Object.values(demoDataRestaurants).map((data) => (
              <EntityItem key={data.id} data={data} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}