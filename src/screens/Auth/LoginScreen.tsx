import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Text,
} from "react-native";
import { colors, windowHeight, windowWidth } from "../../../AppStyles";

export default function LoginScreen({ navigation, handleLogin }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.loginContainer}>
          <View style={styles.loginContainer.headingContainer}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Anmelden</Text>
          </View>
          <View style={styles.loginContainer.inputContainer}>
            <TextInput placeholder="E-Mail" style={styles.input} />
            <TextInput
              placeholder="Passwort"
              secureTextEntry
              style={styles.input}
            />
          </View>
          <View style={styles.loginContainer.forgotPasswordContainer}>
            <Text style={{ fontSize: 12 }}>Passwort vergessen?</Text>
          </View>
          <View style={styles.loginContainer.buttonContainer}>
            <Pressable style={styles.button}>
              <Text style={styles.button.font}>Login</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.registrationContainer}>
          <View style={styles.registrationContainer.headingContainer}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Registrieren
            </Text>
          </View>
          <View style={styles.registrationContainer.buttonContainer}>
            <Pressable style={styles.button}>
              <Text style={styles.button.font}>Registrieren</Text>
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
  loginContainer: {
    height: windowHeight * 0.25,
    width: windowWidth * 0.8,
    marginBottom: windowHeight * 0.05,
    headingContainer: {
      justifyContent: "center",
      height: "25%",
    },
    inputContainer: {
      justifyContent: "space-between",
      alignItems: "center",
      height: "40%",
    },
    forgotPasswordContainer: {
      justifyContent: "center",
      alignItems: "center",
      height: "20%",
    },
    buttonContainer: {
      justifyContent: "center",
      alignItems: "center",
      height: "20%",
    },
  },
  registrationContainer: {
    height: windowHeight * 0.12,
    width: windowWidth * 0.8,
    headingContainer: {
      height: "25%",
      justifyContent: "center",
    },
    buttonContainer: {
      height: "75%",
      justifyContent: "center",
      alignItems: "center",
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
