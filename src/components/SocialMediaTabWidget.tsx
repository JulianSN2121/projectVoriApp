import React from "react";
import { View, Text, StyleSheet, Pressable, Linking } from "react-native";
import { colors, windowHeight, windowWidth } from "../../AppStyles";

const styles = StyleSheet.create({
    socialMediaTabWidget: {
        width: windowWidth / 3.5,
        height: windowHeight / 25,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.lightGrey,
        borderRadius: 4,
        marginRight: 15,
      },
      socialMediaTabWidgetTitle: {
        fontSize: 12,
      },
})

export default function SocialMediaTabWidget({ title, link }) {
    return (
      <Pressable onPress={() => Linking.openURL("https://" + link)} style={styles.socialMediaTabWidget}>
			  <Text style={styles.socialMediaTabWidgetTitle}>{title}</Text>
		  </Pressable>
    );
  }