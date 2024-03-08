import { View, Text, Pressable, Image, StyleSheet, SafeAreaView, ScrollView, } from 'react-native';
import { colors, windowWidth, windowHeight } from "../../../AppStyles";
import Logo from '../../../assets/welcomeScreen_Logo.png';

const styles = StyleSheet.create({ 
  contentContainer:{
    flex: 1,
  },
  headingContainer:{
    flex: 1,
    font: {
      fontSize: 20,
    }
  },
  rowElement: {
    flexDirection: "column",
    width: "100%",
    height: " 100%",
    heading: {
      width: "100%"
    },
    body: {
      borderColor: colors.lightGrey,
      borderWidth: 1,
      borderRadius: 4,
      marginBottom: 10,
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
            <View style={styles.rowElement}>
              <View style={styles.rowElement.heading}>
                <Text>E-Mail Adresse:</Text>
              </View>
              <View style={styles.rowElement.body}>
                <Text>test@testmail.com</Text>
              </View>
            </View>
            <View style={styles.rowElement}>
              <View style={styles.rowElement.heading}>
                <Text>Passwort:</Text>
              </View>
              <View style={styles.rowElement.body}>
                <Text>test@testmail.com</Text>
              </View>
            </View>
            <View>
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