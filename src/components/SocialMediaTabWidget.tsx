import React from "react";
import { View, Text, StyleSheet } from "react-native";
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
      <View style={styles.socialMediaTabWidget}>
        <Text style={styles.socialMediaTabWidgetTitle}>{title}</Text>
      </View>
    );
  }