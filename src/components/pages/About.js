import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { mainWhite, darkGrey, lightTeal } from "../../../utils/_colors";
import { BlurView } from "expo";
const About = () => {
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={{
        uri:
          "https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      }}
      blurRadius={5}
    >
      <Text
        style={{ 
          fontSize: 30,
          color: darkGrey,
          textAlign: "center",
          fontFamily: "open-sans-light"
        }}
      >
        About
      </Text>
      <View style={[styles.cardContainer, shadowStyle]}>
        <Text style={{ color: mainWhite, fontFamily: "open-sans-extra-bold" }}>
          This app was developed and designed by DMI Web Design - in conjunction
          with the Pet Finder API.
        </Text>
        <Text
          style={{
            color: lightTeal,
            fontFamily: "open-sans-extra-bold-italic",
            marginTop: 10
          }}
        >
          If you enjoy the app, give me a rating or a review on the app store!
          😻
        </Text>
        <Text
          style={{
            color: lightTeal,
            fontFamily: "open-sans-light",
            marginTop: 10,
            fontSize: 14
          }}
        >
          For more information on the animals visit petfinder.com
        </Text>
        <Text
          style={{
            color: mainWhite,
            fontFamily: "open-sans-light",
            marginTop: 30
          }}
        >
          Logo Credits: logomakr.com
        </Text>
        <Text
          style={{
            color: mainWhite,
            fontFamily: "open-sans-light",
            fontSize: 8
            
          }}
        >
          Check out the new logo I created here https://logomakr.com/0QwFv4
        </Text>
      </View>
    </ImageBackground>
  );
};

const shadowStyle = {
  shadowOpacity: 0.6,
  shadowRadius: 2,
  shadowColor: darkGrey,
  shadowOffset: { width: -2, height: 2 }
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    alignItems: "center"
  },
  cardContainer: {
    marginTop: 10,
    width: 320,
    height: 250,
    padding: 20,
    backgroundColor: darkGrey
  }
});

export default About;
