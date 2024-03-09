import { useState } from 'react';
import { View, Text, Pressable, Image, StyleSheet, SafeAreaView, ScrollView, TextInput, ViewBase } from 'react-native';
import { colors, windowWidth, windowHeight } from "../../../AppStyles";
import Icon from "react-native-vector-icons/FontAwesome";
import Logo from '../../../assets/welcomeScreen_Logo.png';


const styles = StyleSheet.create({ 
  contentContainer:{
    flex: 1,
    height: windowHeight * .7,
    flexDirection: "column",
  },
  headingContainer:{
    font: {
      fontWeight: "bold",
      fontSize: 18,
    }
  },
  boxContainer: {
    flexGrow: 1,

  },
  logoutContainer: {
    alignItems: "center",
  },
  boxElement: {
    flexDirection: "column",
    heading: {
      width: "100%",
      height: windowHeight *0.04,
      justifyContent: "center",
      font: {
        fontSize: 15,
      }
    },
    body: {
      borderColor: colors.lightGrey,
      borderWidth: 1,
      borderRadius: 4,
      padding: 15,
    }
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

export default function AccountView() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={{ padding: 14 }}>

          <Header></Header> 

          <View style={styles.contentContainer}>
            <View style={styles.headingContainer}>
              <Text style={styles.headingContainer.font}>Hallo Julian</Text>
            </View>

            <View style={styles.boxContainer}>
              <View style={styles.boxElement}>
                <View style={styles.boxElement.heading}>
                  <Text style={styles.boxElement.heading.font}>E-Mail Adresse:</Text>
                </View>
                <View style={styles.boxElement.body}>
                    <EditableBox text={"testmail@mail.com"}></EditableBox>
                </View>
              </View>
              <View style={styles.boxElement}>
                <View style={styles.boxElement.heading}>
                  <Text>Passwort:</Text>
                </View>
                <View style={styles.boxElement.body}>
                  <EditableBox text={"testmail@mail.com"}></EditableBox>
                </View>
              </View>
            </View>
            
            <View style={styles.logoutContainer}>
              <Pressable style={styles.button}>
                  <Text style={styles.button.font}>Abmelden</Text>
              </Pressable>
            </View>
          </View>

          
        </ScrollView>
      </SafeAreaView>
    );
  }

  
function Header(){
  return(
      <View style={headerStyles.headerContainer}>
          <View style={headerStyles.logoContainer}>
              <Image style={headerStyles.logoContainer.logo} source={Logo}></Image>
          </View>
          <View style={headerStyles.titleContainer}>
              <Text style={headerStyles.titleContainer.title}>Konto</Text>
          </View>
      </View>
  )
}

function EditableBox({ text }){
  const [isEditing, setIsEditing] = useState(false);
  const [email, setEmail] = useState(text);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleConfirmEdit = () => {
    setIsEditing(false);
    // Here you can also handle saving the edited email to your state, backend, etc.
  };

  return (
    <View>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        {isEditing ? (
          <TextInput
            style={{ flex: 1, marginRight: 10 }}
            value={email}
            onChangeText={setEmail}
            autoFocus={true}
          />
        ) : (
          <Text>{email}</Text>
        )}

        <Pressable onPress={isEditing ? handleConfirmEdit : toggleEdit}>
          {isEditing ? (
            <Icon name="check" size={20} color="#000" />
          ) : (
            <Icon name="edit" size={20} color="#000" />
          )}
        </Pressable>
      </View>
    </View>
  );
}