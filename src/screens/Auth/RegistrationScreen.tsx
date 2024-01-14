import React from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors, windowHeight, windowWidth } from "../../../AppStyles";

export default function RegistrationScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.container}>
      <View style={styles.registrationContainer}>
        <View style={styles.registrationContainer.headingContainer}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Registrieren</Text>
        </View>
        <View style={styles.registrationContainer.inputsContainer}>
          <InputField placeholderText="Name"></InputField>
          <InputField placeholderText="Telefonnummer"></InputField>
          <InputField placeholderText="E-Mail"></InputField>
          <InputField placeholderText="Passwort"></InputField>
          <InputField placeholderText="Passwort wiederholen"></InputField>
        </View>
        <View style={styles.registrationContainer.buttonContainer}>
          <Pressable style={styles.button}>
            <Text style={styles.button.font}>Jetzt Registrieren</Text>
          </Pressable>
        </View>
      </View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  registrationContainer: {
    height: windowHeight * 0.45,
    width: windowWidth * 0.8,
    marginBottom: windowHeight * 0.05,
    headingContainer: {
      justifyContent: "center",
      height: "20%",
    },
    inputsContainer: {
      justifyContent: "space-between",
      alignItems: "center",
      height: "60%",
    },
    buttonContainer: {
      justifyContent: "center",
      alignItems: "center",
      height: "20%",
    },
  },
  input: {
    borderWidth: 1,
    borderColor: colors.lightGrey,
    padding: 10,
    borderRadius: 5,
    width: windowWidth * 0.6,
  },
  button: {
    backgroundColor: colors.red,
    borderRadius: 5,
    padding: 10,
    width: windowWidth * 0.6,
    font: {
      color: colors.white,
      textAlign: "center",
    },
  },
});

function InputField({ placeholderText }){
  return(
    <TextInput secureTextEntry placeholder={placeholderText} style={styles.input} />
  )
}