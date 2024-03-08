import React from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  Text,
  Pressable,
} from "react-native";

import { colors, windowHeight, windowWidth } from "../../../AppStyles";
import EventImage from "../../../assets/event.jpeg"
import Logo from "../../../assets/welcomeScreen_Logo.png"
import Header from "../../components/Header";

const data = {}

const styles = StyleSheet.create({
    feedItemContainer: {
        flexDirection: "row",
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
        borderColor: colors.lightGrey,
        height: windowHeight / 8,
    },
    imageContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    contentContainer: {
        flex: 5,
        padding: 10
    },
    profileIcon: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    contentHeader: {
        flexDirection: "row",
        alignItems: "center",
    },
    entityName: {
        height: windowHeight * 0.04,
        paddingRight: 10,

        justifyContent: "center",
        style: {
            fontSize: 16,
        },
    },
    posted: {
        width: windowWidth * 0.08,
        height: windowHeight * 0.04,
        justifyContent: "center",
        alignItems: "center",
        style: {
            fontSize: 16,
        }
    },
    postType: {
        flex: 1,
        height: windowHeight * 0.03,
        flexDirection: "row-reverse"
    },
    postTypeContainer: {
        borderRadius: 10,
        padding: 4,
        backgroundColor: colors.lightGrey,
    },
    content: {

    }
})

const headerStyles = {
    headerContainer: {
    flexDirection: "row",
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    height: windowHeight *0.07,
    marginBottom: 12,
  },
  logoContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    logo: {
      width: 37,
      height: 50,
    },
  },
  titleContainer: {
    flex: 12,
    justifyContent: "center",
    title: {
      fontSize: 20,
      fontWeight: 500,
      paddingLeft: 10,
    },
  },
  jobs: {

  },
  events: {

  }
}


export default function FeedScreen(){
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{ padding: 14 }}>
                <FeedHeader></FeedHeader>
                <FeedItem data={data}></FeedItem>
                <FeedItem data={data}></FeedItem>
                <FeedItem data={data}></FeedItem>
                <FeedItem data={data}></FeedItem>
                <FeedItem data={data}></FeedItem>
                <FeedItem data={data}></FeedItem>
                <FeedItem data={data}></FeedItem>
            </ScrollView>
        </SafeAreaView>
  );
}

function FeedHeader(){
    return(
        <View style={headerStyles.headerContainer}>
            <View style={headerStyles.logoContainer}>
                <Image style={headerStyles.logoContainer.logo} source={Logo}></Image>
            </View>
            <View style={headerStyles.titleContainer}>
                <Text style={headerStyles.titleContainer.title}>Feed</Text>
            </View>
        </View>
    )
}

function FeedItem({ data }){
    return(
    // <Pressable onPress={onPress}>
        <View style={styles.feedItemContainer}>
            <View style={styles.imageContainer}>
                <Image style={styles.profileIcon} source={EventImage}></Image>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.contentHeader}>
                    <View style={styles.entityName}>
                        <Text style={styles.entityName.style}>Restaurant 1</Text>
                    </View>
                    <View style={styles.posted}>
                        <Text style={styles.posted.style}>3h</Text>
                    </View>
                    <View style={styles.postType}>
                        <PostTypeInfoWidget postType="Jobanzeige"></PostTypeInfoWidget>
                    </View>
                </View>
                <View style={styles.content}>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</Text>
                </View>
            </View>
        </View>
    // </Pressable>
    )
}

function PostTypeInfoWidget({postType}){
    return(
        <View style={styles.postTypeContainer}>
            <Text>{postType}</Text> 
        </View>
    )
}