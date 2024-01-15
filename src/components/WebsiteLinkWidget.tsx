import React from "react";
import { Text, Pressable, StyleSheet } from "react-native";
import { colors, windowHeight, windowWidth } from "../../AppStyles";


export default function WebsiteLinkWidget() {
	return (
		<Pressable style={styles.container}>
			<Text style={styles.text}>Website</Text>
		</Pressable>
		)
}

const styles = StyleSheet.create({
	container: {
		width: 70,
		height: 20,
		backgroundColor: colors.lightGrey,
		borderRadius: 3,
		padding: 2,
	}, 
	text: {
		color: colors.darkGrey,
		textAlign: "center",
		fontSize: 12
	}
})
