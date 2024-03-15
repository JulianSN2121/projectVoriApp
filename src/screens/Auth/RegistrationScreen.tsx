import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors, windowHeight, windowWidth } from "../../../AppStyles";


const saveLoginCredentials = (credentials) => {
  // Here you save the credentials to a global variable or perform an action like sending to a server.
  global.userCredentials = credentials;
  console.log(global.userCredentials)
};


export default function RegistrationScreen() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const handleSubmit = () => {
    if (password !== passwordRepeat) {
      alert("Die Passwörter stimmen nicht überein.");
      return;
    }
    // Save credentials to global variable
    saveLoginCredentials({ name, phoneNumber, email, password });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.container}>
      <View style={styles.registrationContainer}>
        <View style={styles.registrationContainer.headingContainer}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Registrieren</Text>
        </View>
        <View style={styles.registrationContainer.inputsContainer}>
          <TextInput placeholder="Name" value={name} onChangeText={setName} style={styles.input} />
          <TextInput placeholder="Telefonnummer" value={phoneNumber} onChangeText={setPhoneNumber} style={styles.input} />
          <TextInput placeholder="E-Mail" value={email} onChangeText={setEmail} style={styles.input} />
          <TextInput secureTextEntry placeholder="Passwort" value={password} onChangeText={setPassword} style={styles.input} />
          <TextInput secureTextEntry placeholder="Passwort wiederholen" value={passwordRepeat} onChangeText={setPasswordRepeat} style={styles.input} />
      </View>
        <View style={styles.registrationContainer.buttonContainer}>
          <Pressable onPress={handleSubmit} style={styles.button}>
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